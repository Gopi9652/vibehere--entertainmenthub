
function devera()
{
    document.getElementById("h2").innerHTML=" "
    song_d=[
        {title:"Daavudi",src:'https://youtu.be/gtmDI0b8U-Q?si=rlowX8MsE0y5HP7M'},
        {title:"Aayuda pooja",src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/1mVhKgCq9Dw?si=dzNjQAcWdar_jPU7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
        {title:"chettamalle",src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/5vsOv_bcnhs?si=ZyrkK7WExCA5kAQm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
        {title:"Daavudi",src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/22IEnKGVuUY?si=9VX-sSUmd-07h0yD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
        {title:"Aayuda pooja",src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/1mVhKgCq9Dw?si=dzNjQAcWdar_jPU7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
        {title:"chettamalle",src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/5vsOv_bcnhs?si=ZyrkK7WExCA5kAQm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
    ]
    main=document.getElementById("devera")
    main.innerHTML="";
    for(let song of song_d)
        {
            div=document.createElement("div")
            div.setAttribute("class","set")
            let sname=document.createElement("p")
            sname.textContent=song.title
            let songv=document.createElement("video")
            link=song.src
            songv.setAttribute("src",link)
            songv.setAttribute("class","video")
            songv.controls=true
            div.appendChild(sname)
            div.appendChild(songv)
            main.appendChild(div)
        }
}