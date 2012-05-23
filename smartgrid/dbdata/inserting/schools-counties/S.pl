# mysqlMaker-courses.pl, A program that takes excel.CSV files and puts them into
# a MySQL database

open(INFILE, $ARGV[0]);

while (<INFILE>)
{
    chomp @values; #yummy!
    @values = split('\t', $_); #splits by tabs
    print "INSERT INTO smartgrid.schools2(school_number,school_name,school_description,school_region,school_county) ";
    print "values(";
    print "'$values[0]',"; #get School Number
    print "/'$values[1]/',"; #gets School Name
    print "/'$values[2]/',"; #gets School Description
    print "/'$values[3]/',"; #gets School Region
    print "/'$values[4]/'"; #gets School County
    print ");\n";
}

close (INFILE);