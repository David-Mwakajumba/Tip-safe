/*
  # Restaurant Management Schema

  1. New Tables
    - `restaurants`
      - Basic restaurant information
    - `employees`
      - Staff information and roles
    - `shifts`
      - Work shift tracking
    - `tips`
      - Tip records with restaurant context
  
  2. Security
    - Enable RLS on all tables
    - Policies for restaurant staff access
*/

-- Restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;

-- Employees table
CREATE TABLE IF NOT EXISTS employees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  restaurant_id uuid REFERENCES restaurants NOT NULL,
  role text NOT NULL CHECK (role IN ('waiter', 'manager', 'admin')),
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

-- Shifts table
CREATE TABLE IF NOT EXISTS shifts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id uuid REFERENCES employees NOT NULL,
  restaurant_id uuid REFERENCES restaurants NOT NULL,
  start_time timestamptz NOT NULL,
  end_time timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE shifts ENABLE ROW LEVEL SECURITY;

-- Tips table
CREATE TABLE IF NOT EXISTS tips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id uuid REFERENCES employees NOT NULL,
  restaurant_id uuid REFERENCES restaurants NOT NULL,
  shift_id uuid REFERENCES shifts,
  amount decimal(10,2) NOT NULL CHECK (amount > 0),
  table_number text NOT NULL,
  type text NOT NULL CHECK (type IN ('cash', 'card')),
  verified boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE tips ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Employees can view their restaurant"
  ON restaurants
  FOR SELECT
  USING (
    id IN (
      SELECT restaurant_id 
      FROM employees 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Employees can view coworkers"
  ON employees
  FOR SELECT
  USING (
    restaurant_id IN (
      SELECT restaurant_id 
      FROM employees 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Employees can view shifts"
  ON shifts
  FOR SELECT
  USING (
    restaurant_id IN (
      SELECT restaurant_id 
      FROM employees 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Employees can insert their own shifts"
  ON shifts
  FOR INSERT
  WITH CHECK (
    employee_id IN (
      SELECT id 
      FROM employees 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Employees can view tips"
  ON tips
  FOR SELECT
  USING (
    restaurant_id IN (
      SELECT restaurant_id 
      FROM employees 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Employees can insert their own tips"
  ON tips
  FOR INSERT
  WITH CHECK (
    employee_id IN (
      SELECT id 
      FROM employees 
      WHERE user_id = auth.uid()
    )
  );