-- Find the second highest salary from Employee table.
SELECT MAX(Salary) AS SecondHighestSalary FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee);

-- Get all employees with their department names (INNER JOIN).
SELECT e.EmpId, e.EmpName, d.DeptName FROM Employee e
INNER JOIN Department d ON e.DeptId = d.DeptId;

