    //All github user attributes
    const displayName = document.getElementById("user-name")
    const image = document.getElementById("user-img")
    const followers = document.getElementById("followers")
    const following = document.getElementById("following")
    const repositories = document.getElementById("repositories")
    const gists = document.getElementById("gists")
    const aboutUser = document.getElementById("about-user")
    const locationUser = document.getElementById("location")
    const blog = document.getElementById("blog")
    const joined = document.getElementById("joined")
    const email = document.getElementById("email")
    const companyUser = document.getElementById("company")

    //User input 
    const userInput = document.getElementById("name")

    // Initially when the page loads, it will fetch Linus torvalds account, because i consider him god of Linux and Git so, its
    // a tribute to him.

    var userName = "torvalds"
    const div2 = document.getElementById("repos")
    fetch("https://api.github.com/users/"+userName+"?client_id=def85f9f3e2d299faf77&client_secret=4c74cba1c114319b3191f3a98a3aa29ef116cfc6")
      .then(response=> response.json())
      .then(user =>{
        displayName.innerHTML= user.name
        followers.innerHTML= user.followers
        following.innerHTML= user.following
        repositories.innerHTML= user.public_repos
        gists.innerHTML= user.public_gists
        joined.innerHTML=user.created_at.slice(0,10)
        aboutUser.innerHTML= user.bio
        locationUser.innerHTML= user.location
        blog.innerHTML= user.blog
        email.innerHTML = user.email
        companyUser.innerHTML= user.company
        image.setAttribute("src",user.avatar_url)
      })
    fetch("https://api.github.com/users/"+userName+"/repos?client_id=def85f9f3e2d299faf77&client_secret=4c74cba1c114319b3191f3a98a3aa29ef116cfc6")
      .then(response=> response.json())
      .then(repos =>{
        repos.map(element=>{
          let h2=document.createElement("h2")
          let p= document.createElement("p")
          let a= document.createElement("a")
          let p1= document.createElement("h4")
          let text1 = document.createTextNode(element.description)
          let text = document.createTextNode(element.name)
          let text2 = document.createTextNode("Goto Repository")
          let text3 = document.createTextNode("Stars: "+ element.stargazers_count)
          h2.appendChild(text)
          p.appendChild(text1)
          a.appendChild(text2)
  
          h2.setAttribute("class","tile")
          p.setAttribute("class","about")
          a.setAttribute("class","goto")
          a.setAttribute("href",element.html_url)
          a.setAttribute("target","_blank")
          p1.setAttribute("class","stars")
          p1.appendChild(text3)
          p.appendChild(p1)
          p1.appendChild(a)
          h2.appendChild(p)
          div2.appendChild(h2)
      })
      })

    userInput.addEventListener("input",()=>{
      div2.innerHTML=""
      userName = userInput.value        
     fetch("https://api.github.com/users/"+userName+"?client_id=def85f9f3e2d299faf77&client_secret=4c74cba1c114319b3191f3a98a3aa29ef116cfc6")
      .then(response=> response.json())
      .then(user =>{
        displayName.innerHTML= user.name
        followers.innerHTML= user.followers
        following.innerHTML= user.following
        repositories.innerHTML= user.public_repos
        gists.innerHTML= user.public_gists
        joined.innerHTML=user.created_at.slice(0,10)
        aboutUser.innerHTML= user.bio
        locationUser.innerHTML= user.location
        blog.innerHTML= user.blog
        email.innerHTML = user.email
        companyUser.innerHTML= user.company
        image.setAttribute("src",user.avatar_url)
      })
      fetch("https://api.github.com/users/"+userName+"/repos?client_id=def85f9f3e2d299faf77&client_secret=4c74cba1c114319b3191f3a98a3aa29ef116cfc6")
      .then(response=> response.json())
      .then(repos =>{
        repos.map(element=>{
        let h2=document.createElement("h2")
        let p= document.createElement("p")
        let a= document.createElement("a")
        let p1= document.createElement("h4")
        let text1 = document.createTextNode(element.description)
        let text = document.createTextNode(element.name)
        let text2 = document.createTextNode("Goto Repository")
        let text3 = document.createTextNode("Stars: "+ element.stargazers_count)
        h2.appendChild(text)
        p.appendChild(text1)
        a.appendChild(text2)
        h2.setAttribute("class","tile")
        p.setAttribute("class","about")
        a.setAttribute("class","goto")
        a.setAttribute("href",element.html_url)
        a.setAttribute("target","_blank")
        p1.setAttribute("class","stars")
        p1.appendChild(text3)
        p.appendChild(p1)
        p1.appendChild(a)
        h2.appendChild(p)
        div2.appendChild(h2)
      })
      })
    })
