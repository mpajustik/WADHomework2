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
});