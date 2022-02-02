//Seleted Week Id ajax method
$(document).ready(function(){
  $(".selectWeek").change(function(event){
    event.preventDefault();
		ajaxPostweek();
    // window.location.href = '/?weekId=' + weekId;
  });

  //Ajax get method when select week range.
  function ajaxPostweek() {
    weekId= $("#weekIds").val()
    
		$.ajax({
			type : "get",
      contentType : "application/json",
			url : "/?weekId="+ weekId,
      success: function(result){
        $(".tablecontent").html("");
        $(".modal_container").html("");
        
        result.map(value => {
          $(".tablecontent").append("<tr><td rowspan='2'><input type='text' name='aaa' value='"+value.date+"' style='width: 70px; background-color: transparent; border: none; outline: none' readonly></input></td><td rowspan='2'><input type='text' name='bbb' value='"+value.day+"' style='width: 100px; background-color: transparent; border: none; outline: none' readonly></input><td><input type='text' name='ccc' value='"+value.shift[0]+"' style='width: 70px; background-color: transparent; border: none; outline: none' readonly></input></td><td><input type='text' name='ddd' id='"+value.id+"7777ac_first1' value='"+value.ac_first[0]+"' style='width: 70px; background-color: transparent; border: none; outline: none' readonly></input></td><td><input type='text' name='eee' id='"+value.id+"7777ac_second1' value='"+value.ac_second[0]+"' style='width: 70px; background-color: transparent; border: none; outline: none' readonly></input></td><td>–</td><td><input type='text' name='fff' id='"+value.id+"7777fb_staff1' value='"+value.fb_staff[0]+"' style='width: 70px; background-color: transparent; border: none; outline: none' readonly></input></td><td>–</td><td>–</td><td><button class='btn btn-default' onclick='editFirst("+value.id+"7777)' style='font-weight: bold; font-size: 100%;' type='button'>Edit</button><p id='demo1' style='display:none'></p></td></td><tr><td><input type='text' name='ggg' value='"+value.shift[1]+"' style='width: 70px; background-color: transparent; border: none; outline: none' readonly></input></td><td><input type='text' name='hhh' id='"+value.id+"9999ac_first2' value='"+value.ac_first[1]+"' style='width: 70px; background-color: transparent; border: none; outline: none' readonly></input></td><td><input type='text' name='iii' id='"+value.id+"9999ac_second2' value='"+value.ac_second[1]+"' style='width: 70px; background-color: transparent; border: none; outline: none' readonly></input></td><td>–</td><td><input type='text' name='jjj' id='"+value.id+"9999fb_staff2' value='"+value.fb_staff[1]+"' style='width: 70px; background-color: transparent; border: none; outline: none' readonly></input></td><td>–</td><td>–</td><td><button class='btn btn-default' onclick='editSecond("+value.id+"9999)' style='font-weight: bold; font-size: 100%;' type='button'>Edit</button><p id='demo2' style='display:none'></p></td></tr></tr>");

          $(".modal_container").append("<div id='"+value.id+"7777' class='modal'><div class='modal-dialog modal-lg'><div class='modal-content animate'><div class='imgcontainer'><span class='close' onclick='document.getElementById("+value.id+"7777).style.display=`none`'>&times;</span></div><div class='container-modal'><h1><b style='font-family: Times New Roman, Times, serif, font-weight: bold'>"+value.day+"</b></h1><h4><b style='font-weight: normal; font-size: 125%; font-weight: bold'>"+value.shift[0]+"</b></h4><br><br><div><label style='font-weight: normal; font-size: 125%; font-weight: bold'>Housekeeping(Amenity Center): &#xA0</label><select name='status' style='padding: 3px 10px; font-weight: bold' id='"+value.id+"7777acFirst1'><option value=''>-- Please Choose a Staff Name --</option>| &#x9;<option value='' disabled>-Trained in Amenity Center</option>| &#x9;<option value='Ali'>Ali</option>| &#x9;<option value='Ella'>Ella</option>| &#x9;<option value='Gina'>Gina</option>| &#x9;<option value='' disabled>-Trained as GAS</option>| &#x9;<option value='Charles'>Charles</option>| &#x9;<option value='Danny'>Danny</option>| &#x9;<option value='Hannah'>Hannah</option>| &#x9;<option value='Ivan'>Ivan</option>| &#x9;</select></div><br><div><label style='font-weight: normal; font-size: 125%; font-weight: bold'>Housekeeping(Amenity Center): &#xA0</label><select name='status' style='padding: 3px 10px; font-weight: bold' id='"+value.id+"7777acSecond1'><option value=''>-- Please Choose a Staff Name --</option>| &#x9;<option value='' disabled>-Trained in Amenity Center</option>| &#x9;<option value='Ali'>Ali</option>| &#x9;<option value='Ella'>Ella</option>| &#x9;<option value='Gina'>Gina</option>| &#x9;<option value='' disabled>-Trained as GAS</option>| &#x9;<option value='Charles'>Charles</option>| &#x9;<option value='Danny'>Danny</option>| &#x9;<option value='Hannah'>Hannah</option>| &#x9;<option value='Ivan'>Ivan</option>| &#x9;</select></div><br><div><label style='font-weight: normal; font-size: 125%; font-weight: bold'>F&B(Captain): &#xA0</label><select name='status' style='padding: 3px 10px; font-weight: bold' id='"+value.id+"7777fbStaff1'><option value=''>-- Please Choose a Staff Name --</option>| &#x9;<option value='' disabled>-Trained in Amenity Center</option>| &#x9;<option value='Ali'>Ali</option>| &#x9;<option value='Ella'>Ella</option>| &#x9;<option value='Gina'>Gina</option>| &#x9;<option value='' disabled>-Trained as GAS</option>| &#x9;<option value='Charles'>Charles</option>| &#x9;<option value='Danny'>Danny</option>| &#x9;<option value='Hannah'>Hannah</option>| &#x9;<option value='Ivan'>Ivan</option>| &#x9;</select></div><br><div style='margin-bottom: 50px;'><button class='btn btn-default submit1' onclick='document.getElementById("+value.id+"7777).style.display=`none`' type='button' style='font-weight: bold; font-size: 115%;'>Submit</button><span style='font-weight: normal; font-weight: bold'>></span></div></div></div></div></div>");

          $(".modal_container").append("<div id='"+value.id+"9999' class='modal'><div class='modal-dialog modal-lg'><div class='modal-content animate'><div class='imgcontainer'><span class='close' onclick='document.getElementById("+value.id+"9999).style.display=`none`'>&times;</span></div><div class='container-modal'><h1><b style='font-family: Times New Roman, Times, serif, font-weight: bold'>"+value.day+"</b></h1><h4><b style='font-weight: normal; font-size: 125%; font-weight: bold'>"+value.shift[1]+"</b></h4><br><br><div><label style='font-weight: normal; font-size: 125%; font-weight: bold'>Housekeeping(Amenity Center): &#xA0</label><select name='status' style='padding: 3px 10px; font-weight: bold' id='"+value.id+"9999acFirst2'><option value=''>-- Please Choose a Staff Name --</option>| &#x9;<option value='' disabled>-Trained in Amenity Center</option>| &#x9;<option value='Ali'>Ali</option>| &#x9;<option value='Ella'>Ella</option>| &#x9;<option value='Gina'>Gina</option>| &#x9;<option value='' disabled>-Trained as GAS</option>| &#x9;<option value='Charles'>Charles</option>| &#x9;<option value='Danny'>Danny</option>| &#x9;<option value='Hannah'>Hannah</option>| &#x9;<option value='Ivan'>Ivan</option>| &#x9;</select></div><br><div><label style='font-weight: normal; font-size: 125%; font-weight: bold'>Housekeeping(Amenity Center): &#xA0</label><select name='status' style='padding: 3px 10px; font-weight: bold' id='"+value.id+"9999acSecond2'><option value=''>-- Please Choose a Staff Name --</option>| &#x9;<option value='' disabled>-Trained in Amenity Center</option>| &#x9;<option value='Ali'>Ali</option>| &#x9;<option value='Ella'>Ella</option>| &#x9;<option value='Gina'>Gina</option>| &#x9;<option value='' disabled>-Trained as GAS</option>| &#x9;<option value='Charles'>Charles</option>| &#x9;<option value='Danny'>Danny</option>| &#x9;<option value='Hannah'>Hannah</option>| &#x9;<option value='Ivan'>Ivan</option>| &#x9;</select></div><br><div><label style='font-weight: normal; font-size: 125%; font-weight: bold'>F&B(Captain): &#xA0</label><select name='status' style='padding: 3px 10px; font-weight: bold' id='"+value.id+"9999fbStaff2'><option value=''>-- Please Choose a Staff Name --</option>| &#x9;<option value='' disabled>-Trained in Amenity Center</option>| &#x9;<option value='Ali'>Ali</option>| &#x9;<option value='Ella'>Ella</option>| &#x9;<option value='Gina'>Gina</option>| &#x9;<option value='' disabled>-Trained as GAS</option>| &#x9;<option value='Charles'>Charles</option>| &#x9;<option value='Danny'>Danny</option>| &#x9;<option value='Hannah'>Hannah</option>| &#x9;<option value='Ivan'>Ivan</option>| &#x9;</select></div><br><div style='margin-bottom: 50px;'><button class='btn btn-default submit2' onclick='document.getElementById("+value.id+"9999).style.display=`none`' type='button' style='font-weight: bold; font-size: 115%;'>Submit</button><span style='font-weight: normal; font-weight: bold'>></span></div></div></div></div></div>");
        });

        initializeEvent();
			}
    });
  }
})

//Inital ajax communication when click event.
function initializeEvent() {
  $(".submit1").click(function(event){
    event.preventDefault();
    ajaxPost1();
  });
  
  // GET REQUEST
  $(".submit2").click(function(event){
    event.preventDefault();
    ajaxPost2();
  });
  
	// DO POST
	function ajaxPost1(){
    var scheduleId = $("#demo1").html();

    // PREPARE FORM DATA 
    var trnasData = {
      id: scheduleId,
      firstval : $("#" + scheduleId + "acFirst1").val(),
      secondval :  $("#" + scheduleId + "acSecond1").val(),
      thirdval :  $("#" + scheduleId + "fbStaff1").val()
    }
    
		$.ajax({
			type : "POST",
      contentType : "application/json",
			url : "/contact/transfer_first",
      data : JSON.stringify(trnasData),
      dataType : 'json',
			success: function(result){
				$('#' + scheduleId + 'ac_first1').val(result.firstval);
        $('#' + scheduleId + 'ac_second1').val(result.secondval);
        $('#' + scheduleId + 'fb_staff1').val(result.thirdval);

				console.log("Success: ", result);
			},
			error : function(e) {
				$('#' + scheduleId + 'ac_first1').html("<strong>Error</strong>");
        $('#' + scheduleId + 'ac_second1').html("<strong>Error</strong>");
        $('#' + scheduleId + 'fb_staff1').html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}

  // DO POST
  function ajaxPost2(){
    var scheduleId = $("#demo2").html();
    
    // PREPARE FORM DATA 
    var trnasData = {
      id: scheduleId,
      firstval : $("#" + scheduleId + "acFirst2").val(),
      secondval :  $("#" + scheduleId + "acSecond2").val(),
      thirdval :  $("#" + scheduleId + "fbStaff2").val()
    }

		$.ajax({
			type : "POST",
      contentType : "application/json",
			url : "/contact/transfer_second",
      data : JSON.stringify(trnasData),
      dataType : 'json',
			success: function(result){
				$('#' + scheduleId + 'ac_first2').val(result.firstval);
        $('#' + scheduleId + 'ac_second2').val(result.secondval);
        $('#' + scheduleId + 'fb_staff2').val(result.thirdval);

				console.log("Success: ", result);
			},
			error : function(e) {
				$('#' + scheduleId + 'ac_first2').html("<strong>Error</strong>");
        $('#' + scheduleId + 'ac_second2').html("<strong>Error</strong>");
        $('#' + scheduleId + 'fb_staff2').html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}
}

//First line Edit button Id
function editFirst(editParam) {

  document.getElementById(editParam).style.display = 'block';
  document.getElementById("demo1").innerHTML = editParam;
  // $('#' + editParam).css("display","block");
}

//Second lin Edit button Id
function editSecond(editParam) {

  document.getElementById(editParam).style.display='block';
  document.getElementById("demo2").innerHTML = editParam;
  // $('#' + editParam).css("display","block");
} 

//Initial document ajax
$(document).ready(function() {
	
  initializeEvent();
})
