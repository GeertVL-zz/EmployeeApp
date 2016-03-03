using System.Collections.Generic;
using System.Linq;
using EmployeeApp.Models;
using Microsoft.AspNet.Mvc;

namespace EmployeeApp.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly IEnumerable<Employee> _employees;

        public EmployeeController()
        {
            _employees = new List<Employee>
            {
                new Employee { Id = 1, Name = "Jos Peters" },
                new Employee { Id = 2, Name = "Jaak Janssens" },
                new Employee { Id = 3, Name = "Peter Paulius" }
            };
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            return Json(_employees);
        }

        [HttpGet("{id}", Name = "GetEmployee")]
        public IActionResult GetById(int id)
        {
            var item = _employees.FirstOrDefault(emp => emp.Id == id);
            if (item == null) return HttpNotFound();

            return new ObjectResult(item);
        }
    }
}
