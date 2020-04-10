using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Models
{
    public class EmployeeContext:DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options):base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<Leave> Leave { get; set; }

        public DbSet<WebApi.Models.EmployeeLeaveMapping> EmployeeLeaveMapping { get; set; }
    }
}
