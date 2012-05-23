# mysqlMaker-courses.pl, A program that takes excel.CSV files and puts them into
# a MySQL database

open(INFILE, $ARGV[0]);

while (<INFILE>)
{
    chomp @values; #yummy!
    @values = split('\t', $_); #splits by tabs
    print "INSERT INTO smartgrid.courses(course_number,course_title,course_description,course_active,course_type) ";
    print "values(";
    print "'$values[0]',"; #get course number
    print "'$values[1]',"; #gets School Number
    print "\'$values[2]\',"; #gets Course Title
    print "\'$values[3]\',"; #gets Course Description
    $values[4] .= ");";
    print $values[4]; #gets Course Active
    print "\n";
}

close (INFILE);