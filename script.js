$("#question").hide();
$("#question2").hide();
$("#question4").hide();
$("#question5").hide();
$("#question6").hide();
$(".senders").hide();
$(".btn2").hide();
$(".btn3").hide();
$(".btn4").hide();
$(".btn5").hide();
$(".btn6").hide();
$(".window").hide();
$(".results").hide();


 $("#scam").click(function(){
     console.log("hello");
    $(".window").fadeIn();
    $(".btn2").fadeIn();
    $(".senders").fadeIn();
    $(".yt").hide();
    $(".page-header").hide();
    $(".jumbotron").hide();
});

 var message;
$(".btn2").click(function(){
    message = $(".message-input").val().toLowerCase();
console.log(message);
   $(".idk").append("<div class='sender'></div><div class='sender-title'><div class='message sent'>"+message+"</div></div>");
   $("#question").show();
   $(".btn2").hide();
   $(".btn3").show();
   $("input").val("");

  var message2;
   $(".btn3").click(function(){
    message2 = $(".message-input").val().toLowerCase();
    console.log(message2);
   $(".idk2").append("<div class='sender'></div><div class='sender-title'><div class='message sent'>"+message2+"</div></div>"); 
   $("#question4").show();
    $(".btn3").hide();
   $(".btn4").show();
   $("input").val("");

    var message3;
   $(".btn4").click(function(){
     message3 = $(".message-input").val().toLowerCase();
    console.log(message3);
   $(".idk3").append("<div class='sender'></div><div class='sender-title'><div class='message sent'>"+message3+"</div></div>"); 
   $("#question5").show();
    $(".btn4").hide();
   $(".btn5").show();
   $("input").val("");
 
   var message4= parseInt(message4);
   
   $(".btn5").click(function(){
     message4 = $(".message-input").val().toLowerCase();
    console.log(message4);
   $(".idk4").append("<div class='sender'></div><div class='sender-title'><div class='message sent'>"+message4+"</div></div>"); 
       $(".btn5").hide();
        $(".window").hide();
        $(".senders").hide();
        $(".results").show();
        $("input").val("");



    var ipt = $(".message-input").val(); 
    console.log(ipt);
    
    if(message === "guy" && message2 === "student" && message3 === "red" && message4 === "1"){
    $(".results").html("Karma Akabane  <img class='pic' src='http://pre08.deviantart.net/fd58/th/pre/f/2016/127/c/5/karma_by_aoririhito-da1lyaa.jpg'><br><small> Personally I like Karma because he do what he wants and isn't afriad to try. Looks carefree but actually does his best when hes out of peoples sight. Good person but have a twisted personality</small>");
    }
    else if(message === "guy" && message2 === "student" && message3 === "blue" && message4 === "1"){
    $(".results").html("Nagisa Shiota  <img class='pic' src='https://i.pinimg.com/474x/ec/10/ba/ec10ba09eb3c4f1e0aa2a52f3e6d9f98.jpg'><small> <br>I also like Nagisa due to the fact that he's unpredictable in some ways like fighting. Looks innocent but is a natural assassin, however he doesn't really want to kill. A very nice person with a kind personalilty</small>");
    }
    else if(message === "guy" && message2 === "student" && message3 === "blue" && message4 === "2"){
    $(".results").html("Itnoa Horibe  <img class='pic' src='https://i.pinimg.com/474x/d8/13/0a/d8130aac82c062355c6ca8f4bc4cb717--anime-people-anime-guys.jpg'><small> <br> Itona had developed a hunger for strength from abandonment and being bullied, hate to lose thus he seeked help from someone(he isnt included here so im not putting him in). Itona grew tentacles which allowed him to be as desrtuctive as Koro sensei. Very honest character who love snacks.</small>");
    }
    else if(message === "girl" && message2 === "student" && message3 === "green" && message4 === "2"){
    $(".results").html("Kaede Kayano  <img class='pic' src='http://pm1.narvii.com/6530/455ab142d70115d3aa336e030d4e89bea05d1fca_00.jpg'><small> <br> Kayano had an older sister who worked to create Koro sensei, but ended up dying because of the project. Held a grudge towards Koro sensei and implemented a tentacles in her neck inorder to kill Koro sensei along with changing her identity. In the end she gave it up after hearing Koro sensei side of the story. She's friendly and very kind.</small>");
    }
    else if(message === "girl" && message2 === "student" && message3 === "pink" && message4 === "2"){
    $(".results").html("Ritsu  <img class='pic' src='http://p2.i.ntere.st/8d63a885ca34580f0a55431a013c617d_480.jpg'><small> <br> Created to help with the assassination of Koro sensei. She was reprogrammed to have feeling and consideration for others by Koro sensei. She's very friendly and like to help everyone in need. </small>");
    }
    else if(message === "girl" && message2 === "Student" && message3 === "pink" && message4 === "1"){
    $(".results").html("Nise Onaga <img class='pic' src='https://i.pinimg.com/originals/93/66/6b/93666b647854aa922c4237caf3e5b10f.jpg'><small> <br>  Shes a stand in for Ritsu, due to Ritsu being a computer and can't move around freely. </small>");
    
    }
    else if(message === "girl" && message2 === "student" && message3 === "black" && message4 === "1"){
    $(".results").html("Yukiko Kanzaki  <img class='pic' src='https://i.pinimg.com/originals/15/2e/62/152e624f4d5b621001542976b44fee38.jpg'><small> <br> Living in her strict family her grades dropped due to the stress, she's  kind, calm, graceful and refined girl who is also very diligent and reliable. She has an elegant demeanor, but at the same time has a lot of backbone and isn't afraid to stand up for herself.</small>");
    }
    else if(message === "guy" && message2 === "student" && message3 === "black" && message4 === "1"){
    $(".results").html("Yūma Isogai  <img class='pic' src='https://image.dek-d.com/27/0595/9269/126772103'><small> <br> Yuma Isogai comes from a poor family, he's very popular and work a part-time despite knowing that school regulations stated students weren't allowed to have jobs. He was dropped at class E because he violated school policy .</small>");
    }
    else if(message === "girl" && message2 === "student" && message3 === "yellow" && message4 === "1"){
    $(".results").html("Rio Nakamura  <img class='pic' src='https://img.sharetv.com/shows/characters/large/assassination_classroom.rio_nakamura.jpg'><small> <br>  She was born super smart, but since she was so intelligent no other kids that can match with her no one talked to her. She got lonely of the fact that no one talk to her that she decided to act dumb and drop her grades.</small>");
    }
    else if(message === "guy" && message2 === "student" && message3 === "yellow" && message4 === "1"){
    $(".results").html("Hiroto Maehara  <img class='pic' src='http://p2.i.ntere.st/3b21c355b746fcde632db5d9a2ad9d2f_480.jpg'><small> <br>  He is a caring person and isn't the type to pick on someone weaker than him. He also falls into the type of being honest, and is also popular. However hes also a playboy vibe and live life in the moment. </small>");
    }
    else if(message === "girl" && message2 === "teacher" && message3 === "yellow" && message4 === "1"){
    $(".results").html("Irina Jelavić  <img class='pic' src='https://data.whicdn.com/images/259250959/original.jpg'><small> <br>  Irina is of Serbian descent. After killing the militant who murdered her parents, Irina wandered in the ruins of her hometown until she was found by Olga. She were trained to kill and to become a great assassin. She's arrogant  and calculated.  </small>");
    }
    else if(message === "guy" && message2 === "teacher" && message3 === "black" && message4 === "1"){
    $(".results").html("Tadaomi Karasuma <img class='pic' src='https://img.sharetv.com/shows/characters/large/assassination_classroom.tadaomi_karasuma.jpg'><small> <br>  He is well known amongst militaries for his outstanding reputation and is a powerful individual, which he has proven when he easily overpowered Lovro, who is a retired assassin. Came to this school to kill Koro sensei thus took on a teacher role, however as he spends more time with the students he also got attach.  </small>");
    
    }
    else if(message === "guy" && message2 === "teacher" && message3 === "yellow" && message4 === "2"){
    $(".results").html("Koro Sensei <img class='pic' src='https://i.pinimg.com/originals/3f/68/89/3f6889048666162c77abe23a7799a0c9.jpg'><small> <br>  He was born in a courrpt area where he learned to become a master assassin called the reaper, he became notorious for breaking through even the most strict security teams to assassinate his targets without any hitch. All this changed after assassinating a wealthy businessman and father, the child witness the murder and saw its beauty. So the child requesting that the Reaper train him as his apprentice. However the reaper saw the child as a tool and the child betray him. So he was experiment by the scientist and thus Koro Sensei was created </small>");
    
    }
    else if(message === "class 3e" && message2 === "class 3e" && message3 === "class 3e" && message4 === "3"){
    $(".results").html("Class 3E <img class='pic' src='https://i.pinimg.com/originals/ac/6b/bb/ac6bbbc2cdaee967700df052044caef5.jpg'><small> <br>  It's a class from a prestigious school, however it's a class for those who have terrible grade and to encourage other kids to not dropped to their level. So the government used this class to kill Koro Sensei. </small>");
    
    }
    else if(message === "scam" && message2 === "scam" && message3 === "scam" && message4 === "4"){
    $(".results").html("Idk just random thing <img class='pic2' src='https://i.gifer.com/1b3s.gif'><small> <br>  You found a secret, I just wanted to put this gif here. </small>");
    
    }
    else{
        $(".results").html("Error <img class='pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkEffzpu75aH2yyHBHtzzcuDDlaiOTcbCgSvUSePOSuaII5H-'><small> <br>  They don't have that student, or i'm too lazy to put them in. </small>");
    }

});
});
});
});
   


