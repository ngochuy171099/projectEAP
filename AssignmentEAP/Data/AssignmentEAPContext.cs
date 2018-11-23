using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AssignmentEAP.Entity;

namespace AssignmentEAP.Models
{
    public class AssignmentEAPContext : DbContext
    {
        public AssignmentEAPContext (DbContextOptions<AssignmentEAPContext> options)
            : base(options)
        {
        }

        public DbSet<AssignmentEAP.Entity.Employee> Employee { get; set; }
    }
}
