using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Employee
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime dob { get; set; }
        [Required]
        public DateTime doj { get; set; }
        [Required]
        public string password { get; set; }

        public ICollection<EmployeeLeaveMapping> EmployeeLeaveMappings { get; set; }
    }
}
