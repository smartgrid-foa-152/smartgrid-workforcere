<?
include_once "support_functions.php";

//gets the header function (support_functions.php)
getHeader();

//navigation (support_functions.php)
getNav();

//sidebar (support_functions.php)
getSide();

//content goes here now
indexContent();

//get the footer
getFooter();

function indexContent() {
//adding a comment
	$html = "";

	$html = "<style type=\"text/css\">";

	$html = ".hiddenMenu {display: none;}";

	$html = ".visibleMenu {display: inline;}";

	$html = "</style>";

	$html .="<div class=\"grid_13\">";
	
	$html .="<br />";
	$html .="<h1>Current High School Student</h1>";

	//form for determing what track to send them on.
	$html .="<form action=\"highschoolgrads.php\" method=\"post\" enctype=\"multipart/form-data\">";
     
	 //drop down menu for region
	 $html .="<div class=\"form-input\">";
	 $html .="<div class=\"float-left grid_6\">";
	 $html .="<label id=\"select region\">Please select a region </label>";
	 $html .= "</div>\n";
	 $html .="<div class=\"float-left grid_6\">";
     $html .="<select id=\"category\" id=\"region\" style=\"width: 200px\" onchange=\"showInterest();\">";
     $html .="<option value=\"select_region\">Select Region</option>";
     $html .="<option value=\"Northern\">Northern</option>";
     $html .="<option value=\"Central\">Central</option>";
     $html .="<option value=\"Southern\">Southern</option>";
     $html .="</select>";
		$html .= "</div><div style=\"clear:both;\"></div></div>\n";

		//drop down for field of interest
		$html .="<div class=\"form-input\">";
		$html .="<div class=\"float-left grid_6\">";
        $html .="<label>Please select a field of interest:</label>";
		$html .= "</div>\n";
		$html .="<div class=\"float-left grid_6\">";
        $html .="<select id=\"interest_fields\" class =\"menu\" disabled=\"true=\" onchange=\"showProgram();\">";
        $html .="<option value=\"Select Field\">Select Field</option>";
        $html .="<option value=\"mechanical_engineering\">Mechanical Engineering</option>";
        $html .="<option value=\"electrical_engineering\">Electrical Engineering</option>";
        $html .="</select>";
		$html .= "</div><div style=\"clear:both;\"></div></div>\n";
		
		//program type
		$html .="<div class=\"form-input\">";
		$html .="<div class=\"float-left grid_6\">";
		$html .="<label>Please select the type of program you are interested in:</label>";
		$html .= "</div>\n";
		$html .="<div class=\"float-left grid_6\">";
        $html .="<select id=\"programs_select\" class =\"menu\" disabled=\"true=\" onchange=\"enableSubmit();\">";
        $html .="<option value=\"select_program\">Select Program</option>";
        $html .="<option value=\"cert\">Certification Program</option>";
        $html .="<option value=\"twoyear\">Two Year Program</option>";
		$html .="<option value=\"fouryear\">Four Year University</option>";
        $html .="</select>";
		$html .= "</div><div style=\"clear:both;\"></div></div>\n";
		
		//select button to submit this information
		$html .="<div class=\"submit_button\">";
		$html .="<input type=\"button\" disabled=\"true\" id=\"track_submit\" value=\"Complete form to submit!\" />";
		$html .="</div>";
		
	$html .="</form>";

	$html .= "</div>\n";

	echo $html;
}

?>
