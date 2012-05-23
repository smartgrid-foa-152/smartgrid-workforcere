# mysqlMaker-courses.pl, A program that takes excel.CSV files and puts them into
# a MySQL database

open(INFILE, $ARGV[0]);

$str1 = 'fouryear';
$str2 = 'twoyear';
$str3 = 'cert';
while (<INFILE>)
{
    chomp @values; #yummy!
    @values = split('\t', $_); #splits by tabs
    print "INSERT INTO smartgrid.courses(school_number,course_title,course_description,course_active,course_type) ";
    print "values(";
    print "'$values[0]',"; #get course number
    print "'$values[1]',"; #gets School Number
    print "\'$values[2]\',"; #gets Course Title
    print "\'$values[3]\',"; #gets Course Description
	# print "\'$values[4]\',";
	# print ");\n";
#    $values[4] .= ");";
#    print $values[4]; 
#    print "\n";

	#gets Course Active
    if($values[4] =~ m/fouryear/) #regexp matches the two strings
    {
    print "fouryear);\n"
    }
    elsif($values[4] =~ m/twoyear/)
    {
    print "twoyear);\n"
    }
    elsif($values[4] =~ m/cert/)
    {
    print "cert);\n"
    }
	else
	{
	print ");\n"; #base case, top element in file
	}

}

close (INFILE);