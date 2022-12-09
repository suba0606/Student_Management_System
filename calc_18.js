function sam(){

    // Semester 1
    var a=(document.getElementById("sub1").value);
    b=(document.getElementById("sub2").value);
    c=(document.getElementById("sub3").value);
    d=(document.getElementById("sub4").value);
    e=(document.getElementById("sub5").value);
    f=(document.getElementById("sub6").value);
    g=(document.getElementById("sub7").value);
    tot1=15;
    if(a=='O'){
        a=10;
    }
    else if(a=='A+'){
        a=9;
    }
    else if(a=='A'){
        a=8;
    }
    else if(a=='B+'){
        a=7;
    }
    else if(a=='B'){
        a=6;
    }
    else if(a=='RA-F'){
        a=0;
        tot1=tot1-3;
    }
    if(b=='O'){
        b=10;
    }
    else if(b=='A+'){
        b=9;
    }
    else if(b=='A'){
        b=8;
    }
    else if(b=='B+'){
        b=7;
    }
    else if(b=='B'){
        b=6;
    }
    else if(b=='RA-F'){
        b=0;
        tot1=tot1-4;
    }
    if(c=='O'){
        c=10;
    }
    else if(c=='A+'){
        c=9;
    }
    else if(c=='A'){
        c=8;
    }
    else if(c=='B+'){
        c=7;
    }
    else if(c=='B'){
        c=6;
    }
    else if(c=='RA-F'){
        c=0;
        tot1=tot1-0;
    }
    if(d=='O'){
        d=10;
    }
    else if(d=='A+'){
        d=9;
    }
    else if(d=='A'){
        d=8;
    }
    else if(d=='B+'){
        d=7;
    }
    else if(d=='B'){
        d=6;
    }
    else if(d=='RA-F'){
        d=0;
        tot1=tot1-3;
    }
    if(e=='O'){
        e=10;
    }
    else if(e=='A+'){
        e=9;
    }
    else if(e=='A'){
        e=8;
    }
    else if(e=='B+'){
        e=7;
    }
    else if(e=='B'){
        e=6;
    }
    else if(e=='RA-F'){
        e=0;
        tot1=tot1-1;
    }
    if(f=='O'){
        f=10;
    }
    else if(f=='A+'){
        f=9;
    }
    else if(f=='A'){
        f=8;
    }
    else if(f=='B+'){
        a=7;
    }
    else if(f=='B'){
        f=6;
    }
    else if(f=='RA-F'){
        f=0;
        tot1=tot1-1;
    }
    if(g=='O'){
        g=10;
    }
    else if(g=='A+'){
        g=9;
    }
    else if(g=='A'){
        g=8;
    }
    else if(g=='B+'){
        g=7;
    }
    else if(g=='B'){
        g=6;
    }
    else if(g=='RA-F'){
        g=0;
        tot1=tot1-1;
    }
  
    Total1=(3*a)+(4*b)+(0*c)+(3*d)+(1*e)+(1*f)+(3*g);
    Result1=Total1/tot1;
    n1 = Result1.toFixed(3);
    document.getElementById("res1").innerHTML="SGPA : "+n1;
    document.getElementById("cgpa1").innerHTML="CGPA : "+ n1;



    // Semester 2 
    var a1=(document.getElementById("sub8").value);
    b1=(document.getElementById("sub9").value);
    c1=(document.getElementById("sub10").value);
    d1=(document.getElementById("sub11").value);
    e1=(document.getElementById("sub12").value);
    f1=(document.getElementById("sub13").value);
    g1=(document.getElementById("sub14").value);
    h1=(document.getElementById("sub15").value);
    i1=(document.getElementById("sub16").value);
    tot2=19;
    if(a1=='O'){
        a1=10;
    }
    else if(a1=='A+'){
        a1=9;
    }
    else if(a1=='A'){
        a1=8;
    }
    else if(a1=='B+'){
        a1=7;
    }
    else if(a1=='B'){
        a1=6;
    }
    else if(a1=='RA-F'){
        a1=0;
        tot2=tot2-3;
    }
    if(b1=='O'){
        b1=10;
    }
    else if(b1=='A+'){
        b1=9;
    }
    else if(b1=='A'){
        b1=8;
    }
    else if(b1=='B+'){
        b1=7;
    }
    else if(b1=='B'){
        b1=6;
    }
    else if(b1=='RA-F'){
        b1=0;
        tot2=tot2-3;
    }
    if(c1=='O'){
        c1=10;
    }
    else if(c1=='A+'){
        c1=9;
    }
    else if(c1=='A'){
        c1=8;
    }
    else if(c1=='B+'){
        c1=7;
    }
    else if(c1=='B'){
        c1=6;
    }
    else if(c1=='RA-F'){
        c1=0;
        tot2=tot2-3;
    }
    if(d1=='O'){
        d1=10;
    }
    else if(d1=='A+'){
        d1=9;
    }
    else if(d1=='A'){
        d1=8;
    }
    else if(d1=='B+'){
        d1=7;
    }
    else if(d1=='B'){
        d1=6;
    }
    else if(d1=='RA-F'){
        d1=0;
        tot2=tot2-3;
    }
    if(e1=='O'){
        e1=10;
    }
    else if(e1=='A+'){
        e1=9;
    }
    else if(e1=='A'){
        e1=8;
    }
    else if(e1=='B+'){
        e1=7;
    }
    else if(e1=='B'){
        e1=6;
    }
    else if(e1=='RA-F'){
        e1=0;
        tot2=tot2-4;
    }
    if(f1=='O'){
        f1=10;
    }
    else if(f1=='A+'){
        f1=9;
    }
    else if(f1=='A'){
        f1=8;
    }
    else if(f1=='B+'){
        f1=7;
    }
    else if(f1=='B'){
        f1=6;
    }
    else if(f1=='RA-F'){
        f1=0;
        tot2=tot2-0;
    }
    if(g1=='O'){
        g1=10;
    }
    else if(g1=='A+'){
        g1=9;
    }
    else if(g1=='A'){
        g1=8;
    }
    else if(g1=='B+'){
        g1=7;
    }
    else if(g1=='B'){
        g1=6;
    }
    else if(g1=='RA-F'){
        g1=0;
        tot2=tot2-1;
    }
    if(h1=='O'){
        h1=10;
    }
    else if(h1=='A+'){
        h1=9;
    }
    else if(h1=='A'){
        h1=8;
    }
    else if(h1=='B+'){
        h1=7;
    }
    else if(h1=='B'){
        h1=6;
    }
    else if(h1=='RA-F'){
        h1=0;
        tot2=tot2-1;
    }
    if(i1=='O'){
        i1=10;
    }
    else if(i1=='A+'){
        i1=9;
    }
    else if(i1=='A'){
        i1=8;
    }
    else if(i1=='B+'){
        i1=7;
    }
    else if(i1=='B'){
        i1=6;
    }
    else if(i1=='RA-F'){
        i1=0;
        tot2=tot2-1;
    }
    Total2=(3*a1)+(3*b1)+(3*c1)+(3*d1)+(4*e1)+(0*f1)+(1*g1)+(1*h1)+(1*i1);
    Result2=Total2/tot2;
    n2 = Result2.toFixed(3);
    document.getElementById("res2").innerHTML="SGPA : "+n2;
    var cgpa21;
    var sgpa2;
    var cr2;
    sgpa2=Total1+Total2;
    cr2=tot1+tot2;
    cgpa21=sgpa2/cr2;
    out1=cgpa21.toFixed(3);
    document.getElementById("cgpa2").innerHTML="CGPA : "+ out1;
    

    
 // Semester 3
 var a2=(document.getElementById("sub17").value);
 b2=(document.getElementById("sub18").value);
 c2=(document.getElementById("sub19").value);
 d2=(document.getElementById("sub20").value);
 e2=(document.getElementById("sub21").value);
 f2=(document.getElementById("sub26").value);
 g2=(document.getElementById("sub22").value);
 h2=(document.getElementById("sub23").value);
 i2=(document.getElementById("sub24").value);
 j2=(document.getElementById("sub25").value);
 tot3=23;
 if(a2=='O'){
     a2=10;
 }
 else if(a2=='A+'){
     a2=9;
 }
 else if(a2=='A'){
     a2=8;
 }
 else if(a2=='B+'){
     a2=7;
 }
 else if(a2=='B'){
     a2=6;
 }
 else if(a2=='RA-F'){
     a2=0;
     tot3=tot3-3;
 }
 if(b2=='O'){
     b2=10;
 }
 else if(b2=='A+'){
     b2=9;
 }
 else if(b2=='A'){
     b2=8;
 }
 else if(b2=='B+'){
     b2=7;
 }
 else if(b2=='B'){
     b2=6;
 }
 else if(b2=='RA-F'){
     b2=0;
     tot3=tot3-3;
 }
 if(c2=='O'){
     c2=10;
 }
 else if(c2=='A+'){
     c2=9;
 }
 else if(c2=='A'){
     c2=8;
 }
 else if(c2=='B+'){
     c2=7;
 }
 else if(c2=='B'){
     c2=6;
 }
 else if(c2=='RA-F'){
     c2=0;
     tot3=tot3-3;
 }
 if(d2=='O'){
     d2=10;
 }
 else if(d2=='A+'){
     d2=9;
 }
 else if(d2=='A'){
     d2=8;
 }
 else if(d2=='B+'){
     d2=7;
 }
 else if(d2=='B'){
     d2=6;
 }
 else if(d2=='RA-F'){
     d2=0;
     tot3=tot3-4;
 }
 if(e2=='O'){
     e2=10;
 }
 else if(e2=='A+'){
     e2=9;
 }
 else if(e2=='A'){
     e2=8;
 }
 else if(e2=='B+'){
     e2=7;
 }
 else if(e2=='B'){
     e2=6;
 }
 else if(e2=='RA-F'){
     e2=0;
     tot3=tot3-4;
 }
 if(f2=='O'){
     f2=10;
 }
 else if(f2=='A+'){
     f2=9;
 }
 else if(f2=='A'){
     f2=8;
 }
 else if(f2=='B+'){
     f2=7;
 }
 else if(f2=='B'){
     f2=6;
 }
 else if(f2=='RA-F'){
     f2=0;
     tot3=tot3-3;
 }
 if(g2=='O'){
     g2=10;
 }
 else if(g2=='A+'){
     g2=9;
 }
 else if(g2=='A'){
     g2=8;
 }
 else if(g2=='B+'){
     g2=7;
 }
 else if(g2=='B'){
     g2=6;
 }
 else if(g2=='RA-F'){
     g2=0;
     tot3=tot3-1;
 }
 if(h2=='O'){
     h2=10;
 }
 else if(h2=='A+'){
     h2=9;
 }
 else if(h2=='A'){
     h2=8;
 }
 else if(h2=='B+'){
     h2=7;
 }
 else if(h2=='B'){
     h2=6;
 }
 else if(h2=='RA-F'){
     h2=0;
     tot3=tot3-1;
 }
 if(i2=='O'){
     i2=10;
 }
 else if(i2=='A+'){
     i2=9;
 }
 else if(i2=='A'){
     i2=8;
 }
 else if(i2=='B+'){
     i2=7;
 }
 else if(i2=='B'){
     i2=6;
 }
 else if(i2=='RA-F'){
     i2=0;
     tot3=tot3-1;
 }
 if(j2=='O'){
    j2=10;
}
else if(j2=='A+'){
    j2=9;
}
else if(j2=='A'){
    j2=8;
}
else if(j2=='B+'){
    j2=7;
}
else if(j2=='B'){
    j2=6;
}
else if(j2=='RA-F'){
    j2=0;
    tot3=tot3-1; 
}
 Total3=(3*a2)+(3*b2)+(3*c2)+(4*d2)+(4*e2)+(3*f2)+(1*g2)+(1*h2)+(1*i2)+(0*j2);
 Result3=Total3/tot3;
 n3 = Result3.toFixed(3);
 document.getElementById("res3").innerHTML="SGPA : "+n3;
 var cgpa31;
 var sgpa3;
 var cr3;
 sgpa3=Total1+Total2+Total3;
 cr3=tot1+tot2+tot3;
 cgpa31=sgpa3/cr3;
 out2=cgpa31.toFixed(3);
 document.getElementById("cgpa3").innerHTML="CGPA : "+ out2;


//  Semester 4
var a3=(document.getElementById("sub27").value);
b3=(document.getElementById("sub28").value);
c3=(document.getElementById("sub29").value);
d3=(document.getElementById("sub30").value);
e3=(document.getElementById("sub31").value);
f3=(document.getElementById("sub32").value);
g3=(document.getElementById("sub33").value);
h3=(document.getElementById("sub34").value);
i3=(document.getElementById("sub35").value);
j3=(document.getElementById("sub36").value);
tot4=22;
if(a3=='O'){
    a3=10;
}
else if(a3=='A+'){
    a3=9;
}
else if(a3=='A'){
    a3=8;
}
else if(a3=='B+'){
    a3=7;
}
else if(a3=='B'){
    a3=6;
}
else if(a3=='RA-F'){
    a3=0;
    tot4=tot4-4;
}
if(b3=='O'){
    b3=10;
}
else if(b3=='A+'){
    b3=9;
}
else if(b3=='A'){
    b3=8;
}
else if(b3=='B+'){
    b3=7;
}
else if(b3=='B'){
    b3=6;
}
else if(b3=='RA-F'){
    b3=0;
    tot4=tot4-3;
}
if(c3=='O'){
    c3=10;
}
else if(c3=='A+'){
    c3=9;
}
else if(c3=='A'){
    c3=8;
}
else if(c3=='B+'){
    c3=7;
}
else if(c3=='B'){
    c3=6;
}
else if(c3=='RA-F'){
    c3=0;
    tot4=tot4-3;
}
if(d3=='O'){
    d3=10;
}
else if(d3=='A+'){
    d3=9;
}
else if(d3=='A'){
    d3=8;
}
else if(d3=='B+'){
    d3=7;
}
else if(d3=='B'){
    d3=6;
}
else if(d3=='RA-F'){
    d3=0;
    tot4=tot4-3;
}
if(e3=='O'){
    e3=10;
}
else if(e3=='A+'){
    e3=9;
}
else if(e3=='A'){
    e3=8;
}
else if(e3=='B+'){
    e3=7;
}
else if(e3=='B'){
    e3=6;
}
else if(e3=='RA-F'){
    e3=0;
    tot4=tot4-3;
}
if(f3=='O'){
    f3=10;
}
else if(f3=='A+'){
    f3=9;
}
else if(f3=='A'){
    f3=8;
}
else if(f3=='B+'){
    f3=7;
}
else if(f3=='B'){
    f3=6;
}
else if(f3=='RA-F'){
    f3=0;
    tot4=tot4-3;
}
if(g3=='O'){
    g3=10;
}
else if(g3=='A+'){
    g3=9;
}
else if(g3=='A'){
    g3=8;
}
else if(g3=='B+'){
    g3=7;
}
else if(g3=='B'){
    g3=6;
}
else if(g3=='RA-F'){
    g3=0;
    tot4=tot4-1;
}
if(h3=='O'){
    h3=10;
}
else if(h3=='A+'){
    h3=9;
}
else if(h3=='A'){
    h3=8;
}
else if(h3=='B+'){
    h3=7;
}
else if(h3=='B'){
    h3=6;
}
else if(h3=='RA-F'){
    h3=0;
    tot4=tot4-1;
}
if(i3=='O'){
    i3=10;
}
else if(i3=='A+'){
    i3=9;
}
else if(i3=='A'){
    i3=8;
}
else if(i3=='B+'){
    i3=7;
}
else if(i3=='B'){
    i3=6;
}
else if(i3=='RA-F'){
    i3=0;
    tot4=tot4-1;
}
if(j3=='O'){
   j3=10;
}
else if(j3=='A+'){
   j3=9;
}
else if(j3=='A'){
   j3=8;
}
else if(j3=='B+'){
   j3=7;
}
else if(j3=='B'){
   j3=6;
}
else if(j3=='RA-F'){
   j3=0;
   tot4=tot4-1; 
}
Total4=(4*a3)+(3*b3)+(3*c3)+(3*d3)+(3*e3)+(3*f3)+(1*g3)+(1*h3)+(1*i3)+(0*j3);
Result4=Total4/tot4;
n4 = Result4.toFixed(3);
document.getElementById("res4").innerHTML="SGPA : "+n4;
var cgpa41;
var sgpa4;
var cr4;
sgpa4=Total1+Total2+Total3+Total4;
cr4=tot1+tot2+tot3+tot4;
cgpa41=sgpa4/cr4;
out3=cgpa41.toFixed(3);
document.getElementById("cgpa4").innerHTML="CGPA : "+ out3;

//  Semester 5
var a4=(document.getElementById("sub37").value);
b4=(document.getElementById("sub38").value);
c4=(document.getElementById("sub39").value);
d4=(document.getElementById("sub40").value);
e4=(document.getElementById("sub41").value);
f4=(document.getElementById("sub42").value);
g4=(document.getElementById("sub43").value);
h4=(document.getElementById("sub44").value);
i4=(document.getElementById("sub45").value);
j4=(document.getElementById("sub46").value);
tot5=23;
if(a4=='O'){
    a4=10;
}
else if(a4=='A+'){
    a4=9;
}
else if(a4=='A'){
    a4=8;
}
else if(a4=='B+'){
    a4=7;
}
else if(a4=='B'){
    a4=6;
}
else if(a4=='RA-F'){
    a4=0;
    tot5=tot5-3;
}
if(b4=='O'){
    b4=10;
}
else if(b4=='A+'){
    b4=9;
}
else if(b4=='A'){
    b4=8;
}
else if(b4=='B+'){
    b4=7;
}
else if(b4=='B'){
    b4=6;
}
else if(b4=='RA-F'){
    b4=0;
    tot5=tot5-4;
}
if(c4=='O'){
    c4=10;
}
else if(c4=='A+'){
    c4=9;
}
else if(c4=='A'){
    c4=8;
}
else if(c4=='B+'){
    c4=7;
}
else if(c4=='B'){
    c4=6;
}
else if(c4=='RA-F'){
    c4=0;
    tot5=tot5-4;
}
if(d4=='O'){
    d4=10;
}
else if(d4=='A+'){
    d4=9;
}
else if(d4=='A'){
    d4=8;
}
else if(d4=='B+'){
    d4=7;
}
else if(d4=='B'){
    d4=6;
}
else if(d4=='RA-F'){
    d4=0;
    tot5=tot5-3;
}
if(e4=='O'){
    e4=10;
}
else if(e4=='A+'){
    e4=9;
}
else if(e4=='A'){
    e4=8;
}
else if(e4=='B+'){
    e4=7;
}
else if(e4=='B'){
    e4=6;
}
else if(e4=='RA-F'){
    e4=0;
    tot5=tot5-3;
}
if(f4=='O'){
    f4=10;
}
else if(f4=='A+'){
    f4=9;
}
else if(f4=='A'){
    f4=8;
}
else if(f4=='B+'){
    f4=7;
}
else if(f4=='B'){
    f4=6;
}
else if(f4=='RA-F'){
    f4=0;
    tot5=tot5-3;
}
if(g4=='O'){
    g4=10;
}
else if(g4=='A+'){
    g4=9;
}
else if(g4=='A'){
    g4=8;
}
else if(g4=='B+'){
    g4=7;
}
else if(g4=='B'){
    g4=6;
}
else if(g4=='RA-F'){
    g4=0;
    tot5=tot5-1;
}
if(h4=='O'){
    h4=10;
}
else if(h4=='A+'){
    h4=9;
}
else if(h4=='A'){
    h4=8;
}
else if(h4=='B+'){
    h4=7;
}
else if(h4=='B'){
    h4=6;
}
else if(h4=='RA-F'){
    h4=0;
    tot5=tot5-1;
}
if(i4=='O'){
    i4=10;
}
else if(i4=='A+'){
    i4=9;
}
else if(i4=='A'){
    i4=8;
}
else if(i4=='B+'){
    i4=7;
}
else if(i4=='B'){
    i4=6;
}
else if(i4=='RA-F'){
    i4=0;
    tot5=tot5-1;
}
if(j4=='O'){
   j4=10;
}
else if(j4=='A+'){
   j4=9;
}
else if(j4=='A'){
   j4=8;
}
else if(j4=='B+'){
   j4=7;
}
else if(j4=='B'){
   j4=6;
}
else if(j4=='RA-F'){
   j4=0;
   tot5=tot5-1; 
}
Total5=(3*a4)+(4*b4)+(4*c4)+(3*d4)+(3*e4)+(3*f4)+(1*g4)+(1*h4)+(1*i4)+(0*j4);
Result5=Total5/tot5;
n5 = Result5.toFixed(3);
document.getElementById("res5").innerHTML="SGPA : "+n5;
var cgpa51;
var sgpa5;
var cr5;
sgpa5=Total1+Total2+Total3+Total4+Total5;
cr5=tot1+tot2+tot3+tot4+tot5;
cgpa51=sgpa5/cr5;
out4=cgpa51.toFixed(3);
document.getElementById("cgpa5").innerHTML="CGPA : "+ out4;


//  Semester 6
var a5=(document.getElementById("sub47").value);
b5=(document.getElementById("sub48").value);
c5=(document.getElementById("sub49").value);
d5=(document.getElementById("sub50").value);
e5=(document.getElementById("sub51").value);
f5=(document.getElementById("sub52").value);
g5=(document.getElementById("sub53").value);
h5=(document.getElementById("sub54").value);
i5=(document.getElementById("sub55").value);
j5=(document.getElementById("sub56").value);
tot6=21;
if(a5=='O'){
    a5=10;
}
else if(a5=='A+'){
    a5=9;
}
else if(a5=='A'){
    a5=8;
}
else if(a5=='B+'){
    a5=7;
}
else if(a5=='B'){
    a5=6;
}
else if(a5=='RA-F'){
    a5=0;
    tot6=tot6-3;
}
if(b5=='O'){
    b5=10;
}
else if(b5=='A+'){
    b5=9;
}
else if(b5=='A'){
    b5=8;
}
else if(b5=='B+'){
    b5=7;
}
else if(b5=='B'){
    b5=6;
}
else if(b5=='RA-F'){
    b5=0;
    tot6=tot6-3;
}
if(c5=='O'){
    c5=10;
}
else if(c5=='A+'){
    c5=9;
}
else if(c5=='A'){
    c5=8;
}
else if(c5=='B+'){
    c5=7;
}
else if(c5=='B'){
    c5=6;
}
else if(c5=='RA-F'){
    c5=0;
    tot6=tot6-3;
}
if(d5=='O'){
    d5=10;
}
else if(d5=='A+'){
    d5=9;
}
else if(d5=='A'){
    d5=8;
}
else if(d5=='B+'){
    d5=7;
}
else if(d5=='B'){
    d5=6;
}
else if(d5=='RA-F'){
    d5=0;
    tot6=tot6-3;
}
if(e5=='O'){
    e5=10;
}
else if(e5=='A+'){
    e5=9;
}
else if(e5=='A'){
    e5=8;
}
else if(e5=='B+'){
    e5=7;
}
else if(e5=='B'){
    e5=6;
}
else if(e5=='RA-F'){
    e5=0;
    tot6=tot6-3;
}
if(f5=='O'){
    f5=10;
}
else if(f5=='A+'){
    f5=9;
}
else if(f5=='A'){
    f5=8;
}
else if(f5=='B+'){
    f5=7;
}
else if(f5=='B'){
    f5=6;
}
else if(f5=='RA-F'){
    f5=0;
    tot6=tot6-3;
}
if(g5=='O'){
    g5=10;
}
else if(g5=='A+'){
    g5=9;
}
else if(g5=='A'){
    g5=8;
}
else if(g5=='B+'){
    g5=7;
}
else if(g5=='B'){
    g5=6;
}
else if(g5=='RA-F'){
    g5=0;
    tot6=tot6-1;
}
if(h5=='O'){
    h5=10;
}
else if(h5=='A+'){
    h5=9;
}
else if(h5=='A'){
    h5=8;
}
else if(h5=='B+'){
    h5=7;
}
else if(h5=='B'){
    h5=6;
}
else if(h5=='RA-F'){
    h5=0;
    tot6=tot6-1;
}
if(i5=='O'){
    i5=10;
}
else if(i5=='A+'){
    i5=9;
}
else if(i5=='A'){
    i5=8;
}
else if(i5=='B+'){
    i5=7;
}
else if(i5=='B'){
    i5=6;
}
else if(i5=='RA-F'){
    i5=0;
    tot6=tot6-1;
}
if(j5=='O'){
   j5=10;
}
else if(j5=='A+'){
   j5=9;
}
else if(j5=='A'){
   j5=8;
}
else if(j5=='B+'){
   j5=7;
}
else if(j5=='B'){
   j5=6;
}
else if(j5=='RA-F'){
   j5=0;
   tot6=tot6-1; 
}
// Total6=(3*a5)+(3*b5)+(3*c5)+(3*d5)+(3*e5)+(3*f5)+(1*g5)+(1*h5)+(1*i5)+(0*j5);
// Result6=Total6/tot6;
// n6 = Result6.toFixed(3);
// document.getElementById("res6").innerHTML="SGPA : "+ n6;
// var cgpa61;
// var sgpa6;
// var cr6;
// sgpa6=Total1+Total2+Total3+Total4+Total5+Total6;
// cr6=tot1+tot2+tot3+tot4+tot5+tot6;
// cgpa61=sgpa6/cr6;
// out5=cgpa61.toFixed(3);
// document.getElementById("cgpa6").innerHTML="CGPA : "+ out5;
Total6=(3*a5)+(3*b5)+(3*c5)+(3*d5)+(3*e5)+(3*f5)+(1*g5)+(1*h5)+(1*i5)+(0*j5);
Result6=Total6/tot6;
n6 = Result6.toFixed(3);
document.getElementById("res6").innerHTML="SGPA : "+n6;
var cgpa61;
var sgpa6;
var cr6;
sgpa6=Total1+Total2+Total3+Total4+Total5+Total6;
cr6=tot1+tot2+tot3+tot4+tot5+tot6;
cgpa61=sgpa6/cr6;
out5=cgpa61.toFixed(3);
document.getElementById("cgpa6").innerHTML="CGPA : "+ out5;


//  Semester 7
var a6=(document.getElementById("sub57").value);
b6=(document.getElementById("sub58").value);
c6=(document.getElementById("sub59").value);
d6=(document.getElementById("sub60").value);
e6=(document.getElementById("sub61").value);
f6=(document.getElementById("sub62").value);
g6=(document.getElementById("sub63").value);
h6=(document.getElementById("sub64").value);
tot7=22;
if(a6=='O'){
    a6=10;
}
else if(a6=='A+'){
    a6=9;
}
else if(a6=='A'){
    a6=8;
}
else if(a6=='B+'){
    a6=7;
}
else if(a6=='B'){
    a6=6;
}
else if(a6=='RA-F'){
    a6=0;
    tot7=tot7-3;
}
if(b6=='O'){
    b6=10;
}
else if(b6=='A+'){
    b6=9;
}
else if(b6=='A'){
    b6=8;
}
else if(b6=='B+'){
    b6=7;
}
else if(b6=='B'){
    b6=6;
}
else if(b6=='RA-F'){
    b6=0;
    tot7=tot7-3;
}
if(c6=='O'){
    c6=10;
}
else if(c6=='A+'){
    c6=9;
}
else if(c6=='A'){
    c6=8;
}
else if(c6=='B+'){
    c6=7;
}
else if(c6=='B'){
    c6=6;
}
else if(c6=='RA-F'){
    c6=0;
    tot7=tot7-3;
}
if(d6=='O'){
    d6=10;
}
else if(d6=='A+'){
    d6=9;
}
else if(d6=='A'){
    d6=8;
}
else if(d6=='B+'){
    d6=7;
}
else if(d6=='B'){
    d6=6;
}
else if(d6=='RA-F'){
    d6=0;
    tot7=tot7-3;
}
if(e6=='O'){
    e6=10;
}
else if(e6=='A+'){
    e6=9;
}
else if(e6=='A'){
    e6=8;
}
else if(e6=='B+'){
    e6=7;
}
else if(e6=='B'){
    e6=6;
}
else if(e6=='RA-F'){
    e6=0;
    tot7=tot7-3;
}
if(f6=='O'){
    f6=10;
}
else if(f6=='A+'){
    f6=9;
}
else if(f6=='A'){
    f6=8;
}
else if(f6=='B+'){
    f6=7;
}
else if(f6=='B'){
    f6=6;
}
else if(f6=='RA-F'){
    f6=0;
    tot7=tot7-3;
}
if(g6=='O'){
    g6=10;
}
else if(g6=='A+'){
    g6=9;
}
else if(g6=='A'){
    g6=8;
}
else if(g6=='B+'){
    g6=7;
}
else if(g6=='B'){
    g6=6;
}
else if(g6=='RA-F'){
    g6=0;
    tot7=tot7-1;
}
if(h6=='O'){
    h6=10;
}
else if(h6=='A+'){
    h6=9;
}
else if(h6=='A'){
    h6=8;
}
else if(h6=='B+'){
    h6=7;
}
else if(h6=='B'){
    h6=6;
}
else if(h6=='RA-F'){
    h6=0;
    tot7=tot7-3;
}

Total7=(3*a6)+(3*b6)+(3*c6)+(3*d6)+(3*e6)+(3*f6)+(1*g6)+(3*h6);
Result7=Total7/tot7;
n7 = Result7.toFixed(3);
document.getElementById("res7").innerHTML="SGPA : "+n7;
var cgpa71;
var sgpa7;
var cr7;
sgpa7=Total1+Total2+Total3+Total4+Total5+Total6+Total7;
cr7=tot1+tot2+tot3+tot4+tot5+tot6+tot7;
cgpa71=sgpa7/cr7;
out6=cgpa71.toFixed(3);
document.getElementById("cgpa7").innerHTML="CGPA : "+ out6;


//  Semester 8
var a7=(document.getElementById("sub65").value);
b7=(document.getElementById("sub66").value);
c7=(document.getElementById("sub67").value);
d7=(document.getElementById("sub68").value);


tot8=15;
if(a7=='O'){
    a7=10;
}
else if(a7=='A+'){
    a7=9;
}
else if(a7=='A'){
    a7=8;
}
else if(a7=='B+'){
    a7=7;
}
else if(a7=='B'){
    a7=6;
}
else if(a7=='RA-F'){
    a7=0;
    tot8=tot8-3;
}
if(b7=='O'){
    b7=10;
}
else if(b7=='A+'){
    b7=9;
}
else if(b7=='A'){
    b7=8;
}
else if(b7=='B+'){
    b7=7;
}
else if(b7=='B'){
    b7=6;
}
else if(b7=='RA-F'){
    b7=0;
    tot8=tot8-3;
}
if(c7=='O'){
    c7=10;
}
else if(c7=='A+'){
    c7=9;
}
else if(c7=='A'){
    c7=8;
}
else if(c7=='B+'){
    c7=7;
}
else if(c7=='B'){
    c7=6;
}
else if(c7=='RA-F'){
    c7=0;
    tot8=tot8-3;
}
if(d7=='O'){
    d7=10;
}
else if(d7=='A+'){
    d7=9;
}
else if(d7=='A'){
    d7=8;
}
else if(d7=='B+'){
    d7=7;
}
else if(d7=='B'){
    d7=6;
}
else if(d7=='RA-F'){
    d7=0;
    tot8=tot8-6;
}
Total8=(3*a7)+(3*b7)+(3*c7)+(6*d7);
Result8=Total8/tot8;
n8 = Result8.toFixed(3);
document.getElementById("res8").innerHTML="SGPA : "+n8;
var cgpa81;
var sgpa8;
var cr8;
sgpa8=Total1+Total2+Total3+Total4+Total5+Total6+Total7+Total8;
cr8=tot1+tot2+tot3+tot4+tot5+tot6+tot7+tot8;
cgpa81=sgpa8/cr8;
out7=cgpa81.toFixed(3);
document.getElementById("cgpa8").innerHTML="CGPA : "+ out7;
}