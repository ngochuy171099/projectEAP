using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AssignmentEAP.Entity
{
    public class Employee
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Salary { get; set; }

        public string Department { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime UpdatedTime { get; set; }

    }
}
