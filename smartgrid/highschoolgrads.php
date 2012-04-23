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
	
	$ucberk_fulltime_electrical = "<h2>UC Berkeley Extension</h2>";
	$ucberk_fulltime_electrical .= "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Electrical+Engineering+and+Computer+Sciences&p_dept_cd=EECS&p_path=*\">Electrical Engineering</a></h3>";
  $ucberk_fulltime_electrical .=  "<h4>122.  Introduction to Communication Networks.</h4>";
  $ucberk_fulltime_electrical .=  "<h4>C128.  Feedback Control Systems.</h4>";
  $ucberk_fulltime_electrical .=  "<h4>224B.  Fundamentals of Wireless Communication.</h4>";
  
  $ucberk_fulltime_mechanical = "<h2>UC Berkeley Extension</h2>";
	$ucberk_fulltime_mechanical .= "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Electrical+Engineering+and+Computer+Sciences&p_dept_cd=EECS&p_path=*\">Electrical Engineering</a></h3>";
  $ucberk_fulltime_mechanical .=  "<h4>122.  Introduction to Communication Networks.</h4>";
  $ucberk_fulltime_mechanical .=  "<h4>C128.  Feedback Control Systems.</h4>";
  $ucberk_fulltime_mechanical .=  "<h4>224B.  Fundamentals of Wireless Communication.</h4>";

	$ucirvine_fulltime_mech = "<h2> UC Irvine</h2>";
	$ucirvine_fulltime_mech .= "<h3><a href=\"http://www.editor.uci.edu/catalogue/engr/engr.11.htm\" name=\"Mechanical Engineering\">Mechanical Engineering:</a></h3>";
	$ucirvine_fulltime_mech .= "<ul><li>MAE117 Solar and Renewable Energy Systems</li><li>MAE118 Sustainable Energy Systems</li><li>MAE170 Introduction to Control Systems</li><li>MAE183 Computer-Aided Mechanism Design</li><li>MAE218 Sustainable Energy Systems</li><li>MAE249 Micro-Sensors and Actuators</li></ul>";
	
	$ucirvine_fulltime_elec = "<h2>UC Irvine</h2>";
	$ucirvine_fulltime_elec .= "<ul><li>EECS116 Introduction to Data Management</li><li>EECS141A,B Communication Systems</li><li>EECS148 Introduction to Computer Networks</li><li>EECS160A Introduction to Control Systems</li><li>EECS160LA Control Systems I Laboratory</li><li>EECS160B Sampled-Data and Digital Control Systems</li><li>EECS163 Power Systems</li><li>EECS163L Power Systems Laboratory</li><li>EECS166A Industrial and Power Electronics</li><li>EECS166B Advanced Topics in Industrial and Power Electronics</li><li>EECS179 Microelectromechanical Systems (MEMS)</li><li>EECS241A Digital Communications</li><li>EECS244 Wireless Communications</li><li>EECS248A Internet</li><li>EECS267A,B Industrial and Power Electronics</li><li>EECS279 Micro-Sensors and Actuators</li></ul>";
	
     $html .="<input type=\"hidden\" id=\"forminfo\" value=\"highschoolgrads\"/>";
	 //drop down menu for region
	 $html .="<div class=\"form-input\">";
	 $html .="<div class=\"float-left grid_6\">";
	 $html .="<label id=\"select region\">Please select a region </label>";
	 $html .= "</div>\n";
	 $html .="<div class=\"float-left grid_6\">";
     $html .="<select id=\"region_select\" style=\"width: 200px\" onchange=\"showInterest();\">";
     $html .="<option value=\"no_region\">Select Region</option>";
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
        $html .="<select id=\"interest_select\" class =\"menu\" disabled=\"true=\" onchange=\"showProgram();\">";
        $html .="<option value=\"no_interest\">Select Field</option>";
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
        $html .="<option value=\"no_program\">Select Program</option>";
        $html .="<option value=\"cert\">Certification Program</option>";
        $html .="<option value=\"twoyear\">Two Year Program</option>";
		$html .="<option value=\"fouryear\">Four Year University</option>";
        $html .="</select>";
		$html .= "</div><div style=\"clear:both;\"></div></div>\n";
		
		//select button to submit this information
		$html .="<div class=\"submit_button\">";
		$html .="<input type=\"button\" disabled=\"true\" id=\"track_submit\" value=\"Complete form to submit!\" onclick=\"submitFilters();\"/>";
		$html .="</div>";
		
	$html .="</form>";
	
	//thset of divs to become populated with stuff based on choices.
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"errordiv\">";
	
	$html .= "</div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"northern-mecheng-cert\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"northern-mecheng-twoyear\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"northern-mecheng-fouryear\" style=\"display:none;\">$ucberk_fulltime_mechanical</div>";
	
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"northern-electricaleng-cert\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"northern-electricaleng-twoyear\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"northern-electricaleng-fouryear\" style=\"display:none;\"$ucberk_fulltime_electrical</div>";
	
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"central-mecheng-cert\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"central-mecheng-twoyear\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"central-mecheng-fouryear\" style=\"display:none;\"></div>";
	
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"central-electricaleng-cert\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"central-electricaleng-twoyear\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"central-electricaleng-fouryear\" style=\"display:none;\"></div>";
	
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"southern-mecheng-cert\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"southern-mecheng-twoyear\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"southern-mecheng-fouryear\" style=\"display:none;\"$ucirvine_fulltime_mech</div>";
	
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"southern-electricaleng-cert\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"southern-electricaleng-twoyear\" style=\"display:none;\"></div>";
	$html .="<div class=\"nomargin nopadding clearfilter\" id=\"southern-electricaleng-fouryear\" style=\"display:none;\">$ucirvine_fulltime_elec</div>";

	$html .= "</div>\n";

	echo $html;
	

}

?>