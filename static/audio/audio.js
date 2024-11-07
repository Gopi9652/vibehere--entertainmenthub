
function devera()
            {
                document.getElementById("devera").innerHTML=""
                var  para=document.createElement("p")
                para.textContent="BUJJI"
                document.getElementById("devera").appendChild(para)
                var link1=document.createElement("audio")
                link1.setAttribute("class","song")
                link1.controls=true
                link1.textContent="DAAVUDI"
                link1.src="https://res.cloudinary.com/dngn2hghx/video/upload/v1727330542/vibehere/devara/ogfsevhlnsoj9fcpyuws.mp3"
                link1.type="audio/mp3"
                document.getElementById("devera").appendChild(link1)


                var  para=document.createElement("p")
                para.textContent="Daavudi SONG"
                document.getElementById("devera").appendChild(para)
                var link1=document.createElement("audio")
                link1.setAttribute("class","song")
                link1.controls=true
                link1.textContent="DAVUDI"
                link1.src="https://res.cloudinary.com/dngn2hghx/video/upload/v1727340319/vibehere/devara/prk9k2t8wuh2cb2yxtz1.mp3"
                link1.type="audio/mp3"
                document.getElementById("devera").appendChild(link1)


                var  para=document.createElement("p")
                para.textContent="Daavudi SONG"
                document.getElementById("devera").appendChild(para)
                var link1=document.createElement("audio")
                link1.setAttribute("class","song")
                link1.controls=true
                link1.textContent="DAVUDI"
                link1.src="https://res.cloudinary.com/dngn2hghx/video/upload/v1727340319/vibehere/devara/prk9k2t8wuh2cb2yxtz1.mp3"
                link1.type="audio/mp3"
                document.getElementById("devera").appendChild(link1)

                var  para=document.createElement("p")
                para.textContent="Daavudi SONG"
                document.getElementById("devera").appendChild(para)
                var link1=document.createElement("audio")
                link1.setAttribute("class","song")
                link1.controls=true
                link1.textContent="DAVUDI"
                link1.src="https://res.cloudinary.com/dngn2hghx/video/upload/v1727340319/vibehere/devara/prk9k2t8wuh2cb2yxtz1.mp3"
                link1.type="audio/mp3"
                document.getElementById("devera").appendChild(link1)


                var  para=document.createElement("p")
                para.textContent="Daavudi SONG"
                document.getElementById("devera").appendChild(para)
                var link1=document.createElement("audio")
                link1.setAttribute("class","song")
                link1.controls=true
                link1.textContent="DAVUDI"
                link1.src="https://res.cloudinary.com/dngn2hghx/video/upload/v1727340319/vibehere/devara/prk9k2t8wuh2cb2yxtz1.mp3"
                link1.type="audio/mp3"
                document.getElementById("devera").appendChild(link1)
            }
function kalki()
            {
            document.getElementById("")
                var  para=document.createElement("p")
                para.textContent="BUJJI"
                document.getElementById("kalki").appendChild(para)
                var link1=document.createElement("audio")
                link1.setAttribute("class","song")
                link1.controls=true
                link1.textContent="DAAVUDI"
                link1.src="https://res.cloudinary.com/dngn2hghx/video/upload/v1727330542/vibehere/devara/ogfsevhlnsoj9fcpyuws.mp3"
                link1.type="audio/mp3"
                document.getElementById("kalki").appendChild(link1)


                var  para=document.createElement("p")
                para.textContent="Daavudi SONG"
                document.getElementById("kalki").appendChild(para)
                var link1=document.createElement("audio")
                link1.setAttribute("class","song")
                link1.controls=true
                link1.textContent="DAVUDI"
                link1.src="https://res.cloudinary.com/dngn2hghx/video/upload/v1727340319/vibehere/devara/prk9k2t8wuh2cb2yxtz1.mp3"
                link1.type="audio/mp3"
                document.getElementById("kalki").appendChild(link1)


                var  para=document.createElement("p")
                para.textContent="Daavudi SONG"
                document.getElementById("kalki").appendChild(para)
                var link1=document.createElement("audio")
                link1.setAttribute("class","song")
                link1.controls=true
                link1.textContent="DAVUDI"
                link1.src="https://res.cloudinary.com/dngn2hghx/video/upload/v1727340319/vibehere/devara/prk9k2t8wuh2cb2yxtz1.mp3"
                link1.type="audio/mp3"
                document.getElementById("kalki").appendChild(link1)

                var  para=document.createElement("p")
                para.textContent="Daavudi SONG"
                document.getElementById("kalki").appendChild(para)
                var link1=document.createElement("audio")
                link1.setAttribute("class","song")
                link1.controls=true
                link1.textContent="DAVUDI"
                link1.src="https://res.cloudinary.com/dngn2hghx/video/upload/v1727340319/vibehere/devara/prk9k2t8wuh2cb2yxtz1.mp3"
                link1.type="audio/mp3"
                document.getElementById("kalki").appendChild(link1)


                var  para=document.createElement("p")
                para.textContent="Daavudi SONG"
                document.getElementById("kalki").appendChild(para)
                var link1=document.createElement("audio")
                link1.setAttribute("class","song")
                link1.controls=true
                link1.textContent="DAVUDI"
                link1.src="https://res.cloudinary.com/dngn2hghx/video/upload/v1727340319/vibehere/devara/prk9k2t8wuh2cb2yxtz1.mp3"
                link1.type="audio/mp3"
                document.getElementById("kalki").appendChild(link1)
            }

 // Select all the figure elements
const figures = document.querySelectorAll('.movies');

 // Loop through each figure and add an event listener
figures.forEach(figure => {
     figure.addEventListener('click', function() {
         // Get the movie name from the data attribute
           figures.forEach(f => f.classList.remove('click'));
         this.classList.add("click")
     });
});


let currentlyPlaying = null; // Track the currently playing song

        // Event delegation to handle 'play' events on dynamically created songs
        document.addEventListener('play', function(e) {
            if (e.target.classList.contains('song')) {
                if (currentlyPlaying && currentlyPlaying !== e.target) {
                    currentlyPlaying.pause();
                    currentlyPlaying.currentTime = 0;
                }
                currentlyPlaying = e.target;
            }
        },true);