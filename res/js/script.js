//TASK 1 Include jQuery plugin in your page
//Lisasin index.html osasse jQuery CDN-i
//Lisasin lhtsalt $(function()) osa siia
$(function() {
  //TASK 2 tegin kaks faili Course.js ja User.js mida kutsun välja index.html-s
  //loon uue User objekti
  //loon Array 4 objektiga
  var user = new User();

  //loome  array milles on Course objektid, mis saadakse Course.js lehelt.
  var courses = [
    new Course("Agile software development", 1, 82),
    new Course("System modeling", 1, 85),
    new Course("Object-oriented programming", 2, 99),
    new Course("Estonian language Level A2", 2, 65)
  ];

  //kutsuttakse välja init funktsioon
  init();

  //TASK 3
  //Courses nupu peale vajutades muudab tabeli nähtavaks
  //Muudab nupude ja tabeli/profiili konteineri klassi
  $("#courses-button").click(function() {
    $("#courses-container").addClass("active");
    $("#profile-container").removeClass("active");
    $("#courses-button").addClass("active");
    $("#profile-button").removeClass("active");
    //TASK 4 Kursuse lisamise vorm tuleb ja läheb pluss nupule klikates
    $("#add-course-button").click(function() {
      $("#add-course").toggle();
       });
	//TASK 5 Tabelisse andmete lisamine pärast save nuppu vajutust
    $("#save-course").click(function() {
	  courses.push(new Course($("#title").val(),$("#semester").val(),$("#grade").val()));
	  addToTable();
	  $(".input").val("");
        $("#add-course").toggle();
	  calculateGPA();
	});
      $("#cancel-course").click(function() {
          $(".input").val("");
          $("#add-course").toggle();
          });

  });


  //Profile nupu peale vajutades muudab profiili nähtavaks
  //Muudab nupude ja tabeli/profiili konteineri klassi
  $("#profile-button").click(function() {
    $("#courses-container").removeClass("active");
    $("#profile-container").addClass("active");
    $("#courses-button").removeClass("active");
    $("#profile-button").addClass("active");
  });



  //TASK 2 osa, kus luuakse dünaamiliselt tabeli elemendid.
  function init() {
    for (let i = 0; i < courses.length; i++) {
      let tr = $("<tr></tr>");
      let tdId = $("<td></td>").text(i + 1);
      let tdTitle = $("<td></td>").text(courses[i].title);
      let tdSemester = $("<td></td>").text(courses[i].semester);
      let tdGrade = $("<td></td>").text(courses[i].grade);

      tr.append(tdId);
      tr.append(tdTitle);
      tr.append(tdSemester);
      tr.append(tdGrade);

      $("#courses tbody").append(tr);
    }
  }
  // TASK 5 Tabelisse uue rea lisamise funktsioon, pea-aegu sama mis init(), aga ainult viimase rea jaoks
  function addToTable() {
	for (let i = courses.length-1; i < courses.length; i++) {
      let tr = $("<tr></tr>");
      let tdId = $("<td></td>").text(i + 1);
      let tdTitle = $("<td></td>").text(courses[i].title);
      let tdSemester = $("<td></td>").text(courses[i].semester);
      let tdGrade = $("<td></td>").text(courses[i].grade);

      tr.append(tdId);
      tr.append(tdTitle);
      tr.append(tdSemester);
      tr.append(tdGrade);

      $("#courses tbody").append(tr);
	}
  }
  // TASK 5 Keskmise hinde arvutamise funktsioon
  function calculateGPA() {
	  var sum = 0;
		$.each(courses.grade,function(){
			var gp = 0
			if (this > 90){
				gp = 4;
			} else if (this > 80) {
				gp = 3;
			} else if (this > 70) {
				gp = 2;
			} else if (this > 60) {
				gp = 1;
			} else if (this > 50) {
				gp = 0.5;
			} else {
				gp = 0;
			}
			sum+=gp});
	  var gpa = sum/courses.length;
	  $("#gpa").text(gpa);
  }
});
