class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
  
  class Manager extends Employee{
    constructor(name, hireDate, salary, descriptionOfJob){
        super(name, hireDate, salary);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription(){
        console.log(this.name + " was hired on " + this.hireDate + ", has a salary of " + this.salary + " per year, " + "and is an " + this.descriptionOfJob + ".");
    }
    
  }

  class Designer extends Employee{
    constructor(name, hireDate, salary, experience){
        super(name, hireDate, salary);
        this.experience = experience;
    }
    yearsExperience(){
        console.log(this.name + " was hired on " + this.hireDate + ", has a salary of " + this.salary + " per year, " + "and has " + this.experience + " yrs experience.");
    }
    
  }

  class SalesAssociate extends Employee{
    constructor(name, hireDate, salary, degrees){
        super(name, hireDate, salary);
        this.degrees = degrees;
    }
    degreeCompleted(){
        console.log(this.name + " was hired on " + this.hireDate + ", has a salary of " + this.salary + " per year, " + "and holds a " + this.degrees + ".");
    }
    
  }

  let manager1 = new Manager("Rose", 80000, "March 28th, 2018", "Accounting Manager");
  let designer1 = new Designer("Jake", 95000, "January 5th, 2011", 15);
  let salesassociate1 = new SalesAssociate("Jennifer", 55000, "September 25th, 2001", "Bachelor of Science");
  manager1.getName();
  manager1.jobDescription();
  designer1.getName();
  designer1.yearsExperience();
  salesassociate1.getName();
  salesassociate1.degreeCompleted();
