let secretPlayer = null;

const playerList = [
  {value: 'Alaa Adelnaby' , datadecade: 1980 , datastart: 1986 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 30},
{value: 'Mark Alarie' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 32},
{value: 'Grayson Allen' , datadecade: 2010 , datastart: 2014 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 3},
{value: 'Tommy Amaker' , datadecade: 1980 , datastart: 1983 , datayears: 4 , dataposition: 'G' , dataheight: 600 , datanumber: 4},
{value: 'Christian Ast' , datadecade: 1990 , datastart: 1990 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 54},
{value: 'William Avery' , datadecade: 1990 , datastart: 1997 , datayears: 2 , dataposition: 'G' , dataheight: 602 , datanumber: 5},
{value: 'Marvin Bagley III' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'F' , dataheight: 611 , datanumber: 35},
{value: 'Joey Baker' , datadecade: 2010 , datastart: 2018 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 13},
{value: 'Paolo Banchero' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 610 , datanumber: 5},
{value: 'RJ Barrett' , datadecade: 2010 , datastart: 2018 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 5},
{value: 'Shane Battier' , datadecade: 1990 , datastart: 1997 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 31},
{value: 'Joey Beard' , datadecade: 1990 , datastart: 1990 , datayears: 4 , dataposition: 'F' , dataheight: 609 , datanumber: 42},
{value: 'Andy Berndt' , datadecade: 1980 , datastart: 1985 , datayears: 2 , dataposition: 'G' , dataheight: 606 , datanumber: 0},
{value: 'Brennan Besser' , datadecade: 2010 , datastart: 2015 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 53},
{value: 'Jay Bilas' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'C' , dataheight: 608 , datanumber: 21},
{value: 'Kenny Blakeney' , datadecade: 1990 , datastart: 1991 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 4},
{value: 'Jaylen Blakes' , datadecade: 2020 , datastart: 2021 , datayears: 2 , dataposition: 'G' , dataheight: 602 , datanumber: 2},
{value: 'Eric Boateng' , datadecade: 2000 , datastart: 2005 , datayears: 1 , dataposition: 'C' , dataheight: 610 , datanumber: 45},
{value: 'Marques Bolden' , datadecade: 2010 , datastart: 2016 , datayears: 3 , dataposition: 'C' , dataheight: 611 , datanumber: 20},
{value: 'Carlos Boozer' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'F' , dataheight: 609 , datanumber: 4},
{value: 'Stanley Borden' , datadecade: 2020 , datastart: 2021 , datayears: 2 , dataposition: 'C' , dataheight: 700 , datanumber: 52},
{value: 'Andy Borman' , datadecade: 1990 , datastart: 1999 , datayears: 3 , dataposition: 'G' , dataheight: 601 , datanumber: 40},
{value: 'Jamal Boykin' , datadecade: 2000 , datastart: 2005 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 34},
{value: 'Jaemyn Brakefield' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 5},
{value: 'Elton Brand' , datadecade: 1990 , datastart: 1997 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 42},
{value: 'Robert Brickey' , datadecade: 1980 , datastart: 1986 , datayears: 4 , dataposition: 'F' , dataheight: 605 , datanumber: 21},
{value: 'Kenney Brown' , datadecade: 1990 , datastart: 1992 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 14},
{value: 'Stan Brunson' , datadecade: 1990 , datastart: 1992 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 31},
{value: 'D. Bryant' , datadecade: 1990 , datastart: 1996 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 0},
{value: 'Clay Buckley' , datadecade: 1980 , datastart: 1987 , datayears: 3 , dataposition: 'C' , dataheight: 610 , datanumber: 45},
{value: 'Mike Buckmire' , datadecade: 2010 , datastart: 2017 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 51},
{value: 'Andre Buckner' , datadecade: 2000 , datastart: 2002 , datayears: 2 , dataposition: 'G' , dataheight: 510 , datanumber: 2},
{value: 'Ron Burt' , datadecade: 1990 , datastart: 1991 , datayears: 1 , dataposition: 'G' , dataheight: 600 , datanumber: 5},
{value: 'Ryan Caldbeck' , datadecade: 1990 , datastart: 1998 , datayears: 3 , dataposition: 'G' , dataheight: 603 , datanumber: 5},
{value: 'Justin Caldbeck' , datadecade: 1990 , datastart: 1996 , datayears: 3 , dataposition: 'G' , dataheight: 603 , datanumber: 3},
{value: 'Jeff Capel' , datadecade: 1990 , datastart: 1993 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 5},
{value: 'Vernon Carey Jr.' , datadecade: 2010 , datastart: 2019 , datayears: 1 , dataposition: 'C' , dataheight: 610 , datanumber: 1},
{value: 'Chris Carrawell' , datadecade: 1990 , datastart: 1996 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 23},
{value: 'Wendell Carter' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'F' , dataheight: 610 , datanumber: 34},
{value: 'Kale Catchings' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'F' , dataheight: 605 , datanumber: 12},
{value: 'Mark Causey' , datadecade: 2000 , datastart: 2002 , datayears: 2 , dataposition: 'G' , dataheight: 603 , datanumber: 45},
{value: 'Mike Chappell' , datadecade: 1990 , datastart: 1996 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 0},
{value: 'Matt Christensen' , datadecade: 2000 , datastart: 2000 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 41},
{value: 'Marty Clark' , datadecade: 1990 , datastart: 1990 , datayears: 4 , dataposition: 'G' , dataheight: 606 , datanumber: 3},
{value: 'Henry Coleman' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 34},
{value: 'Chris Collins' , datadecade: 1990 , datastart: 1992 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 20},
{value: 'Quinn Cook' , datadecade: 2010 , datastart: 2011 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 2},
{value: 'Joe Cook' , datadecade: 1980 , datastart: 1987 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 13},
{value: 'Seth Curry' , datadecade: 2000 , datastart: 2009 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 30},
{value: 'Olek Czyz' , datadecade: 2000 , datastart: 2008 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 13},
{value: 'Jordan Davidson' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'G' , dataheight: 601 , datanumber: 41},
{value: 'Patrick Davidson' , datadecade: 2000 , datastart: 2003 , datayears: 3 , dataposition: 'G' , dataheight: 600 , datanumber: 41},
{value: 'Brian Davis' , datadecade: 1980 , datastart: 1988 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 23},
{value: 'Andre Dawkins' , datadecade: 2000 , datastart: 2009 , datayears: 5 , dataposition: 'G' , dataheight: 605 , datanumber: 34},
{value: 'Johnny Dawkins' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 24},
{value: 'Javin DeLaurier' , datadecade: 2010 , datastart: 2016 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 12},
{value: 'Sean Dockery' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 15},
{value: 'Taymon Domzalski' , datadecade: 1990 , datastart: 1995 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 13},
{value: 'Chris Duhon' , datadecade: 2000 , datastart: 2000 , datayears: 2 , dataposition: 'G' , dataheight: 601 , datanumber: 21},
{value: 'Mike Dunleavy' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'F' , dataheight: 609 , datanumber: 34},
{value: 'Trevon Duval' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 1},
{value: 'Daniel Ewing' , datadecade: 2000 , datastart: 2001 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 5},
{value: 'Danny Ferry' , datadecade: 1980 , datastart: 1985 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 35},
{value: 'Kyle Filipowski' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'C' , dataheight: 700 , datanumber: 30},
{value: 'Michael Gbinije' , datadecade: 2010 , datastart: 2011 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 13},
{value: 'Harry Giles' , datadecade: 2010 , datastart: 2016 , datayears: 1 , dataposition: 'F' , dataheight: 610 , datanumber: 1},
{value: 'Jordan Goldwire' , datadecade: 2010 , datastart: 2017 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 14},
{value: 'Jacob Grandison' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'G' , dataheight: 606 , datanumber: 13},
{value: 'AJ Griffin' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 21},
{value: 'Dick Groat' , datadecade: 1940 , datastart: 1948 , datayears: 4 , dataposition: 'G' , dataheight: 511 , datanumber: 10},
{value: 'Josh Hairston' , datadecade: 2000 , datastart: 2009 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 15},
{value: 'Jeremy Hall' , datadecade: 1990 , datastart: 1995 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 0},
{value: 'Jay Heaps' , datadecade: 1990 , datastart: 1995 , datayears: 4 , dataposition: 'G' , dataheight: 509 , datanumber: 22},
{value: 'Gerald Henderson' , datadecade: 2000 , datastart: 2006 , datayears: 3 , dataposition: 'G' , dataheight: 604 , datanumber: 15},
{value: 'Phil Henderson' , datadecade: 1980 , datastart: 1986 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 44},
{value: 'Dave Henderson' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 12},
{value: 'Grant Hill' , datadecade: 1990 , datastart: 1990 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 33},
{value: 'Thomas Hill' , datadecade: 1980 , datastart: 1989 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 25},
{value: 'Rodney Hood' , datadecade: 2010 , datastart: 2012 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 5},
{value: 'Nick Horvath' , datadecade: 2000 , datastart: 2000 , datayears: 2 , dataposition: 'F' , dataheight: 610 , datanumber: 3},
{value: 'Spencer Hubbard' , datadecade: 2020 , datastart: 2020 , datayears: 3 , dataposition: 'G' , dataheight: 508 , datanumber: 55},
{value: 'Bobby Hurley' , datadecade: 1980 , datastart: 1989 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 11},
{value: 'Matthew Hurt' , datadecade: 2010 , datastart: 2019 , datayears: 2 , dataposition: 'F' , dataheight: 609 , datanumber: 21},
{value: 'Brandon Ingram' , datadecade: 2010 , datastart: 2015 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 14},
{value: 'Kyrie Irving' , datadecade: 2010 , datastart: 2010 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 1},
{value: 'Frank Jackson' , datadecade: 2010 , datastart: 2016 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 1},
{value: 'Nate James' , datadecade: 1990 , datastart: 1997 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 14},
{value: 'Amile Jefferson' , datadecade: 2010 , datastart: 2012 , datayears: 5 , dataposition: 'F' , dataheight: 609 , datanumber: 21},
{value: 'Chase Jeter' , datadecade: 2010 , datastart: 2015 , datayears: 2 , dataposition: 'C' , dataheight: 610 , datanumber: 2},
{value: 'Theo John' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 12},
{value: 'Max Johns' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 41},
{value: 'Jalen Johnson' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 1},
{value: 'Steve Johnson' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'F' , dataheight: 605 , datanumber: 51},
{value: 'Patrick Johnson' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'C' , dataheight: 609 , datanumber: 51},
{value: 'Bates Jones' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 34},
{value: 'Tre Jones' , datadecade: 2010 , datastart: 2018 , datayears: 2 , dataposition: 'G' , dataheight: 603 , datanumber: 3},
{value: 'Matt Jones' , datadecade: 2010 , datastart: 2013 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 13},
{value: 'Tyus Jones' , datadecade: 2010 , datastart: 2014 , datayears: 1 , dataposition: 'G' , dataheight: 601 , datanumber: 5},
{value: 'Dahntay Jones' , datadecade: 2000 , datastart: 2002 , datayears: 2 , dataposition: 'F' , dataheight: 606 , datanumber: 30},
{value: 'Trevor Keels' , datadecade: 2020 , datastart: 2021 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 1},
{value: 'Sean Kelly' , datadecade: 2010 , datastart: 2011 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 42},
{value: 'Ryan Kelly' , datadecade: 2000 , datastart: 2009 , datayears: 4 , dataposition: 'F' , dataheight: 611 , datanumber: 34},
{value: 'Luke Kennard' , datadecade: 2010 , datastart: 2015 , datayears: 2 , dataposition: 'G' , dataheight: 606 , datanumber: 5},
{value: 'Taylor King' , datadecade: 2000 , datastart: 2007 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 20},
{value: 'Billy King' , datadecade: 1980 , datastart: 1984 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 55},
{value: 'Greg Koubek' , datadecade: 1980 , datastart: 1987 , datayears: 3 , dataposition: 'F' , dataheight: 606 , datanumber: 22},
{value: 'Christian Laettner' , datadecade: 1980 , datastart: 1988 , datayears: 4 , dataposition: 'F' , dataheight: 611 , datanumber: 32},
{value: 'Antonio Lang' , datadecade: 1990 , datastart: 1990 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 21},
{value: 'Trajan Langdon' , datadecade: 1990 , datastart: 1995 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 21},
{value: 'Dereck Lively II' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'C' , dataheight: 701 , datanumber: 1},
{value: 'Reggie Love' , datadecade: 2000 , datastart: 2001 , datayears: 4 , dataposition: 'F' , dataheight: 604 , datanumber: 30},
{value: 'Corey Maggette' , datadecade: 1990 , datastart: 1998 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 50},
{value: 'David Mayer' , datadecade: 2010 , datastart: 2010 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 51},
{value: 'Bill McCaffrey' , datadecade: 1980 , datastart: 1989 , datayears: 1 , dataposition: 'G' , dataheight: 603 , datanumber: 5},
{value: 'David McClure' , datadecade: 2000 , datastart: 2005 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 14},
{value: 'Roshown Mcleod' , datadecade: 1990 , datastart: 1996 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 4},
{value: 'Doug McNeely' , datadecade: 1980 , datastart: 1980 , datayears: 4 , dataposition: 'F' , dataheight: 604 , datanumber: 11},
{value: 'Josh McRoberts' , datadecade: 2000 , datastart: 2005 , datayears: 2 , dataposition: 'F' , dataheight: 610 , datanumber: 2},
{value: 'Dan Meagher' , datadecade: 1980 , datastart: 1981 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 45},
{value: 'Andy Means' , datadecade: 2000 , datastart: 2001 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 53},
{value: 'Erik Meek' , datadecade: 1990 , datastart: 1991 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 52},
{value: 'Lee Melchionni' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 13},
{value: 'Mark Mitchell' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 25},
{value: 'Tony Moore' , datadecade: 1990 , datastart: 1992 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 30},
{value: 'Wendell Moore Jr.' , datadecade: 2010 , datastart: 2019 , datayears: 3 , dataposition: 'F' , dataheight: 605 , datanumber: 0},
{value: 'Alex Murphy' , datadecade: 2010 , datastart: 2011 , datayears: 2 , dataposition: 'F' , dataheight: 608 , datanumber: 12},
{value: 'DeMarcus Nelson' , datadecade: 2000 , datastart: 2004 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 21},
{value: 'Martin Nessley' , datadecade: 1980 , datastart: 1983 , datayears: 4 , dataposition: 'C' , dataheight: 702 , datanumber: 44},
{value: 'Greg Newton' , datadecade: 1990 , datastart: 1993 , datayears: 4 , dataposition: 'C' , dataheight: 610 , datanumber: 55},
{value: 'Tom Novik' , datadecade: 2000 , datastart: 2003 , datayears: 2 , dataposition: 'F' , dataheight: 606 , datanumber: 50},
{value: 'Alex O\'Connell' , datadecade: 2010 , datastart: 2017 , datayears: 3 , dataposition: 'G' , dataheight: 606 , datanumber: 15},
{value: 'Sean Obi' , datadecade: 2010 , datastart: 2014 , datayears: 3 , dataposition: 'F' , dataheight: 609 , datanumber: 34},
{value: 'Semi Ojeleye' , datadecade: 2010 , datastart: 2013 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 20},
{value: 'Jahlil Okafor' , datadecade: 2010 , datastart: 2014 , datayears: 1 , dataposition: 'C' , dataheight: 611 , datanumber: 15},
{value: 'Nick Pagliuca' , datadecade: 2010 , datastart: 2013 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 45},
{value: 'Joe Pagliuca' , datadecade: 2000 , datastart: 2003 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 45},
{value: 'Crawford Palmer' , datadecade: 1980 , datastart: 1988 , datayears: 2 , dataposition: 'C' , dataheight: 609 , datanumber: 34},
{value: 'Jabari Parker' , datadecade: 2010 , datastart: 2013 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 1},
{value: 'Cherokee Parks' , datadecade: 1990 , datastart: 1991 , datayears: 4 , dataposition: 'C' , dataheight: 611 , datanumber: 44},
{value: 'Greg Paulus' , datadecade: 2000 , datastart: 2005 , datayears: 4 , dataposition: 'G' , dataheight: 601 , datanumber: 3},
{value: 'Ross Perkins' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 40},
{value: 'Baker Perry' , datadecade: 1990 , datastart: 1995 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 0},
{value: 'Casey Peters' , datadecade: 2000 , datastart: 2007 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 53},
{value: 'Marshall Plumlee' , datadecade: 2010 , datastart: 2011 , datayears: 5 , dataposition: 'C' , dataheight: 700 , datanumber: 40},
{value: 'Miles Plumlee' , datadecade: 2000 , datastart: 2008 , datayears: 4 , dataposition: 'F' , dataheight: 610 , datanumber: 21},
{value: 'Mason Plumlee' , datadecade: 2000 , datastart: 2009 , datayears: 3 , dataposition: 'F' , dataheight: 610 , datanumber: 5},
{value: 'Martynas Pocius' , datadecade: 2000 , datastart: 2005 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 5},
{value: 'Ricky Price' , datadecade: 1990 , datastart: 1994 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 3},
{value: 'Tyrese Proctor' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 5},
{value: 'Shavlik Randolph' , datadecade: 2000 , datastart: 2002 , datayears: 3 , dataposition: 'F' , dataheight: 610 , datanumber: 42},
{value: 'Cam Reddish' , datadecade: 2010 , datastart: 2018 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 2},
{value: 'J.J. Redick' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 4},
{value: 'Christian Reeves' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'C' , dataheight: 701 , datanumber: 21},
{value: 'Austin Rivers' , datadecade: 2010 , datastart: 2011 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 0},
{value: 'Jeremy Roach' , datadecade: 2020 , datastart: 2020 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 3},
{value: 'Justin Robinson' , datadecade: 2010 , datastart: 2015 , datayears: 5 , dataposition: 'F' , dataheight: 609 , datanumber: 50},
{value: 'Casey Sanders' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'C' , dataheight: 611 , datanumber: 20},
{value: 'Michael Savarino' , datadecade: 2010 , datastart: 2019 , datayears: 3 , dataposition: 'G' , dataheight: 600 , datanumber: 30},
{value: 'Jon Scheyer' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 30},
{value: 'Jaden Schutt' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'G' , dataheight: 605 , datanumber: 14},
{value: 'J.D. Simpson' , datadecade: 1990 , datastart: 1997 , datayears: 4 , dataposition: 'G' , dataheight: 604 , datanumber: 13},
{value: 'Kyle Singler' , datadecade: 2000 , datastart: 2007 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 12},
{value: 'Todd Singleton' , datadecade: 1990 , datastart: 1994 , datayears: 4 , dataposition: 'F' , dataheight: 604 , datanumber: 15},
{value: 'Nolan Smith' , datadecade: 2000 , datastart: 2007 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 2},
{value: 'John Smith' , datadecade: 1980 , datastart: 1985 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 33},
{value: 'Quin Snyder' , datadecade: 1980 , datastart: 1985 , datayears: 4 , dataposition: 'G' , dataheight: 603 , datanumber: 14},
{value: 'Cassius Stanley' , datadecade: 2010 , datastart: 2019 , datayears: 1 , dataposition: 'G' , dataheight: 606 , datanumber: 2},
{value: 'DJ Steward' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 2},
{value: 'Kevin Strickland' , datadecade: 1980 , datastart: 1984 , datayears: 4 , dataposition: 'G' , dataheight: 605 , datanumber: 31},
{value: 'Rasheed Sulaimon' , datadecade: 2010 , datastart: 2012 , datayears: 2 , dataposition: 'G' , dataheight: 604 , datanumber: 14},
{value: 'Nick Sutton' , datadecade: 2000 , datastart: 2006 , datayears: 1 , dataposition: 'G' , dataheight: 602 , datanumber: 13},
{value: 'Andre Sweet' , datadecade: 2000 , datastart: 2000 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 12},
{value: 'Patrick Tapé' , datadecade: 2020 , datastart: 2020 , datayears: 1 , dataposition: 'F' , dataheight: 609 , datanumber: 12},
{value: 'Jayson Tatum' , datadecade: 2010 , datastart: 2016 , datayears: 1 , dataposition: 'F' , dataheight: 608 , datanumber: 0},
{value: 'Lance Thomas' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'F' , dataheight: 608 , datanumber: 42},
{value: 'Tyler Thornton' , datadecade: 2010 , datastart: 2010 , datayears: 4 , dataposition: 'G' , dataheight: 602 , datanumber: 3},
{value: 'Griffin Tormey' , datadecade: 2000 , datastart: 2005 , datayears: 2 , dataposition: 'G' , dataheight: 511 , datanumber: 40},
{value: 'Gary Trent' , datadecade: 2010 , datastart: 2017 , datayears: 1 , dataposition: 'G' , dataheight: 606 , datanumber: 2},
{value: 'Antonio Vrankovic' , datadecade: 2010 , datastart: 2015 , datayears: 4 , dataposition: 'C' , dataheight: 700 , datanumber: 30},
{value: 'Carmen Wallace' , datadecade: 1990 , datastart: 1993 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 34},
{value: 'Jack White' , datadecade: 2010 , datastart: 2016 , datayears: 4 , dataposition: 'F' , dataheight: 607 , datanumber: 41},
{value: 'Dariq Whitehead' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 0},
{value: 'Mark Williams' , datadecade: 2020 , datastart: 2020 , datayears: 2 , dataposition: 'C' , dataheight: 701 , datanumber: 15},
{value: 'Elliot Williams' , datadecade: 2000 , datastart: 2008 , datayears: 1 , dataposition: 'G' , dataheight: 604 , datanumber: 20},
{value: 'Shelden Williams' , datadecade: 2000 , datastart: 2002 , datayears: 4 , dataposition: 'F' , dataheight: 609 , datanumber: 23},
{value: 'Jason Williams' , datadecade: 2000 , datastart: 2001 , datayears: 3 , dataposition: 'G' , dataheight: 602 , datanumber: 22},
{value: 'Weldon Williams' , datadecade: 1980 , datastart: 1982 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 40},
{value: 'Zion Williamson' , datadecade: 2010 , datastart: 2018 , datayears: 1 , dataposition: 'F' , dataheight: 607 , datanumber: 1},
{value: 'Justise Winslow' , datadecade: 2010 , datastart: 2014 , datayears: 1 , dataposition: 'F' , dataheight: 606 , datanumber: 12},
{value: 'Steve Wojciechowski' , datadecade: 1990 , datastart: 1994 , datayears: 4 , dataposition: 'G' , dataheight: 511 , datanumber: 12},
{value: 'Keenan Worthington' , datadecade: 2010 , datastart: 2019 , datayears: 4 , dataposition: 'F' , dataheight: 606 , datanumber: 45},
{value: 'Ryan Young' , datadecade: 2020 , datastart: 2022 , datayears: 1 , dataposition: 'C' , dataheight: 610 , datanumber: 15},
{value: 'Todd Zafirovski' , datadecade: 2000 , datastart: 2009 , datayears: 5 , dataposition: 'F' , dataheight: 609 , datanumber: 52},
{value: 'Brian Zoubek' , datadecade: 2000 , datastart: 2006 , datayears: 4 , dataposition: 'C' , dataheight: 701 , datanumber: 55}
]

// Pick a secret player at random
function pickSecretPlayer() {
  // Get the player list dropdown element
  // const playerList = document.getElementById("player-list");

//   <option value= 'Bill McCaffrey' , data-decade= '1980' , data-start= '1989' , data-years= '1' , data-position= 'G' , data-height= '603', data-number= '5'>Bill McCaffrey</option>
// <option value= 'David McClure' , data-decade= '2000' , data-start= '2005' , data-years= '4' , data-position= 'F' , data-height= '606', data-number= '14'>David McClure</option>
// {value: 'Alaa Adelnaby' , data-decade: 1980 , data-start: 1986 , data-years: 4 , data-position: 'C' , data-height: 610 , data-number: 30}
  
  
  const playerSelect = document.getElementById('player-list');

playerList.forEach((player) => {
  const option = document.createElement('option');
  option.value = player.value;
  option.text = player.value;
  playerSelect.appendChild(option);
});
  
  // Get a random index for selecting a player
  const playerIndex = Math.floor(Math.random() * playerList.length);

  // Get the selected player's attributes
  const selectedPlayer = playerList[playerIndex];
  const name = selectedPlayer.value;
  const decade = selectedPlayer.datadecade;
  const start = selectedPlayer.datastart;
  const years = selectedPlayer.datayears;
  const position = selectedPlayer.dataposition;
  const height = selectedPlayer.dataheight;
  const number = selectedPlayer.datanumber;

  // Set the selected player as the secret player
  secretPlayer = { name, decade, start, years, position, height, number };
}

document.addEventListener('DOMContentLoaded', function() {
  // your code here
  // Call the pickSecretPlayer() function to set the initial secret player
  pickSecretPlayer()
  document.getElementById("guess-button").addEventListener("click", function() {
    updateTable();
  });

  // Call the resetGame() function when the "Reset" button is clicked
  document.getElementById("reset-button").addEventListener("click", resetGame);

}, false);


////////

////////

function updateTable() {
  // Get the selected player option from the dropdown menu
  const selectedOption = document.getElementById("player-list").value;
  const selectedIndex = playerList.map(e => e.value).indexOf(selectedOption);

  // Get the player row that needs to be updated
  let rowNumber = 0;
  for (let i = 1; i <= 6; i++) {
    if (!document.querySelector(`#guess-row-${i} .player-${i}`).innerHTML) {
      rowNumber = i;
      break;
    }
  }

  // Update the table with the selected player's attributes
  const selectedPlayer = document.querySelector(
    `option[value="${selectedOption}"]`
  );

  document.querySelector(`#guess-row-${rowNumber} .player-${rowNumber}`).innerHTML =
    playerList[selectedIndex].value;
  document.querySelector(`#guess-row-${rowNumber} .decade-${rowNumber}`).innerHTML =
   playerList[selectedIndex].datadecade;
  document.querySelector(`#guess-row-${rowNumber} .first-year-${rowNumber}`).innerHTML =
    playerList[selectedIndex].datastart;
  document.querySelector(`#guess-row-${rowNumber} .num-years-${rowNumber}`).innerHTML =
    playerList[selectedIndex].datayears;
  document.querySelector(`#guess-row-${rowNumber} .position-${rowNumber}`).innerHTML =
    playerList[selectedIndex].dataposition;
  document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).innerHTML =
    playerList[selectedIndex].dataheight;
  document.querySelector(`#guess-row-${rowNumber} .number-${rowNumber}`).innerHTML =
    playerList[selectedIndex].datanumber;

  // Check if the selected player matches the secret player
  if (playerList[selectedIndex].value === secretPlayer.name) {
    document.querySelector(`#guess-row-${rowNumber}`).classList.add("guessed");
    document.getElementById("player-list").disabled = true;
     document.getElementById("guess-button").disabled = true;// Disable the dropdown
  }

 // Check if the selected player's decade matches with the secret player's decade
if (playerList[selectedIndex].datadecade === secretPlayer.decade) {
  document.querySelector(`#guess-row-${rowNumber} .decade-${rowNumber}`).classList.add("matched");
} else if (Math.abs(playerList[selectedIndex].datadecade - secretPlayer.decade) <= 10) {
  document.querySelector(`#guess-row-${rowNumber} .decade-${rowNumber}`).classList.add("close");
}

// Check if the selected player's start year matches with the secret player's start year
if (playerList[selectedIndex].datastart === secretPlayer.start) {
  document.querySelector(`#guess-row-${rowNumber} .first-year-${rowNumber}`).classList.add("matched");
} else if (Math.abs(playerList[selectedIndex].datastart - secretPlayer.start) <= 2) {
  document.querySelector(`#guess-row-${rowNumber} .first-year-${rowNumber}`).classList.add("close");
}

// Check if the selected player's number of years matches with the secret player's number of years
if (playerList[selectedIndex].datayears === secretPlayer.years) {
  document.querySelector(`#guess-row-${rowNumber} .num-years-${rowNumber}`).classList.add("matched");
}else if (Math.abs(playerList[selectedIndex].datayears - secretPlayer.years) <= 2) {
  document.querySelector(`#guess-row-${rowNumber} .num-years-${rowNumber}`).classList.add("close");
}

// Check if the selected player's position matches with the secret player's position
if (playerList[selectedIndex].dataposition === secretPlayer.position) {
  document.querySelector(`#guess-row-${rowNumber} .position-${rowNumber}`).classList.add("matched");
}

// Check if the selected player's height matches with the secret player's height
if (playerList[selectedIndex].dataheight === secretPlayer.height) {
  document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).classList.add("matched");
} else if (Math.abs(playerList[selectedIndex].dataheight - secretPlayer.height) <= 2) {
  document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).classList.add("close");
} else if (Math.abs(playerList[selectedIndex].dataheight - secretPlayer.height) >= 89 && Math.abs(playerList[selectedIndex].dataheight - secretPlayer.height) <= 90) {
  document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).classList.add("close");
}

// Check if the selected player's number matches with the secret player's number
if (playerList[selectedIndex].datanumber === secretPlayer.number) {
  document.querySelector(`#guess-row-${rowNumber} .number-${rowNumber}`).classList.add("matched");
} else if (Math.abs(playerList[selectedIndex].datanumber - secretPlayer.number) <= 2) {
  document.querySelector(`#guess-row-${rowNumber} .number-${rowNumber}`).classList.add("close");
}

  // Disable the dropdown menu after 6 selections or when rowNumber is 6
  const numSelections = document.querySelectorAll(".player-6:not(:empty)").length;
  if (numSelections === 6 || rowNumber === 6) {
    document.getElementById("player-list").disabled = true;
    document.getElementById("guess-button").disabled = true;
    // Assuming that the secret player object is already defined
const secretPlayerName = document.createTextNode(secretPlayer.name);
const secretPlayerNameContainer = document.getElementById("secret-player-name");
secretPlayerNameContainer.appendChild(secretPlayerName);
  }
}

/////////
// Reset the game
function resetGame() {
  // Reset the secret player
  pickSecretPlayer();

  // Clear all player guesses
  for (let i = 1; i <= 6; i++) {
    document.querySelector(`#guess-row-${i} .player-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .decade-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .first-year-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .num-years-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .position-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .height-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .number-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i}`).classList.remove("guessed");
    document.querySelector(`#guess-row-${i} .decade-${i}`).classList.remove("matched");
    document.querySelector(`#guess-row-${i} .first-year-${i}`).classList.remove("matched");
    document.querySelector(`#guess-row-${i} .num-years-${i}`).classList.remove("matched");
    document.querySelector(`#guess-row-${i} .position-${i}`).classList.remove("matched");
    document.querySelector(`#guess-row-${i} .height-${i}`).classList.remove("matched");
    document.querySelector(`#guess-row-${i} .number-${i}`).classList.remove("matched");
   document.querySelector(`#guess-row-${i} .decade-${i}`).classList.remove("close");
    document.querySelector(`#guess-row-${i} .first-year-${i}`).classList.remove("close");
    document.querySelector(`#guess-row-${i} .num-years-${i}`).classList.remove("close");
    document.querySelector(`#guess-row-${i} .position-${i}`).classList.remove("close");
    document.querySelector(`#guess-row-${i} .height-${i}`).classList.remove("close");
    document.querySelector(`#guess-row-${i} .number-${i}`).classList.remove("close");
    
  }
  // Reset the dropdown and enable it
  const playerList = document.getElementById("player-list");
  playerList.selectedIndex = 0;
  playerList.disabled = false;
  
 const guessButton = document.getElementById("guess-button");
  guessButton.selectedIndex = 0;
  guessButton.disabled = false;

  // Clear the secret player name
  const secretPlayerNameContainer = document.getElementById("secret-player-name");
  secretPlayerNameContainer.innerHTML = "";

}





/////////// NEW SECTION

