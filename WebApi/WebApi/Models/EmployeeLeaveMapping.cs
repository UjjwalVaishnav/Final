using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class EmployeeLeaveMapping
    {
        [Key]
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }
        public int LeaveId { get; set; }
        public Leave Leave { get; set; }
        [Required]
        public DateTime LeaveStartDate { get; set; }
        [Required]
        public DateTime LeaveEndDate { get; set; }
        [Required]
        public string Status { get; set; }
    }
}
