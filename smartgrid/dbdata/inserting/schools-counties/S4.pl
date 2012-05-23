# S2.pl, A program that takes excel.CSV files and puts them into
# a MySQL database

open(INFILE, $ARGV[0]);

while (<INFILE>)
{
    chomp @values; #yummy!
    @values = split('\t', $_); #splits by tabs
    print "INSERT INTO smartgrid.schools2(school_name,school_description,school_region,school_county) ";
    print "values('";
    print "$values[0]"; #gets School Name
		print "','";
    print "$values[1]"; #gets School Description
		print "','";
    print "$values[2]"; #gets School Region
		print "','";
	print "$values[3]"; # gets School County
    print "'); \n";

#    $values[4] .= ");";
#    print $values[4]; #gets Course Active
}

close (INFILE);