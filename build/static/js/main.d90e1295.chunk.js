(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{22:function(e,i,t){},28:function(e,i,t){"use strict";t.r(i);var r=t(0),s=(t(1),t(15)),a=t.n(s),u=t(7),o=t(2),m={id:5,user:{name:"Cristina",surname:"Rodriguez",born:"04.04.1992",education:"BSU",city:"Baku",jobs:"Developer",country:"England",image:"https://avatarfiles.alphacoders.com/197/197076.jpg",coverImage:"https://www.f-covers.com/cover/paris-collage-facebook-cover-timeline-banner-for-fb.jpg"},posts:[{post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."},{post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,"},{post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,"},{post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."},{post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,"},{post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,"}]},n=(t(22),t.p+"static/media/logo.584d1cc6.png"),c=function(e){return Object(r.jsxs)("header",{className:"header container-H",children:[Object(r.jsx)("div",{className:"header__logo",children:Object(r.jsx)("img",{src:n})}),Object(r.jsxs)("div",{className:"header__user",children:[Object(r.jsxs)("h3",{children:[e.data.name," ",e.data.surname]}),Object(r.jsx)("img",{src:e.data.image})]})]})},d=function(){return Object(r.jsxs)("nav",{className:"navbar container-N",children:[Object(r.jsx)(u.b,{to:"/",exact:!0,activeClassName:"active-nav",children:"Profile"}),Object(r.jsx)(u.b,{to:"/news",activeClassName:"active-nav",children:"News"}),Object(r.jsx)(u.b,{to:"/messages/1",activeClassName:"active-nav",children:"Messages"}),Object(r.jsx)(u.b,{to:"/setting",activeClassName:"active-nav",children:"Setting"})]})},l=function(e){return Object(r.jsxs)("div",{className:"user-profil-card",children:[Object(r.jsx)("div",{className:"user-profil-card__cover",children:Object(r.jsx)("img",{src:e.userdata.coverImage})}),Object(r.jsxs)("div",{className:"user-profil-card__info",children:[Object(r.jsx)("img",{src:e.userdata.image}),Object(r.jsxs)("div",{className:"user-profil-card__info__desc",children:[Object(r.jsxs)("h1",{children:[e.userdata.name," ",e.userdata.surname]}),Object(r.jsxs)("p",{children:["Date of Birth: ",Object(r.jsxs)("span",{children:[e.userdata.born," "]})]}),Object(r.jsxs)("p",{children:["City: ",Object(r.jsx)("span",{children:e.userdata.city})]}),Object(r.jsxs)("p",{children:["Education: ",Object(r.jsx)("span",{children:e.userdata.education})]}),Object(r.jsxs)("p",{children:["Position: ",Object(r.jsx)("span",{children:e.userdata.jobs})]})]})]})]})},p=function(e){return Object(r.jsxs)("div",{className:"user-add-post",children:[Object(r.jsx)("h1",{children:e.headerName}),Object(r.jsx)("textarea",{name:"userPost",children:e.placeholder}),Object(r.jsx)("a",{children:e.btnName})]})},g=function(e){return Object(r.jsxs)("div",{className:"user-share-posts",children:[Object(r.jsx)("img",{src:e.image}),Object(r.jsxs)("p",{children:[e.data.post," "]})]})},b=function(e){return Object(r.jsx)(r.Fragment,{children:e.userdata.posts.map((function(i,t){return Object(r.jsx)(g,{image:e.userdata.user.image,data:i},t)}))})},h=function(e){return Object(r.jsxs)("div",{className:"content container-C",children:[Object(r.jsx)(l,{userdata:e.data.user}),Object(r.jsx)(p,{headerName:"My Post",placeholder:"What do you think?",btnName:"Share"}),Object(r.jsx)(b,{userdata:e.data})]})},j=[{id:1,name:"John",surname:"Smith",jobs:"Developer",messages:[{message:"  Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.02.2021"},{message:"   Lorem ipsum dolor sit amet consectetur  Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsum adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.02.2021"},{message:"    Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.02.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"20:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"    Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"}],country:"England",image:"https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/4/0c/40c51d1b-4160-56f0-8698-44f0a799887e/5e7252ab7156b.image.jpg?crop=510%2C539%2C4%2C12&resize=500%2C528&order=crop%2Cresize"},{id:2,name:"James",surname:"Miller",jobs:"Designer",messages:[{message:"   Lorem ipsum dolor sit amet consectetur ad Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit ame Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumt consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"20:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsum consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consecte Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumtur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"}],country:"Portugal",image:"https://i.insider.com/5085bf43eab8ea994a000000?width=1100&format=jpeg&auto=webp"},{id:3,name:"Ashley",surname:"Jordan",jobs:"Manager",messages:[{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"20:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"}],country:"USA",image:"https://i1.wp.com/www.gerlinde.com/wp-content/uploads/2017/05/US-Roman-Jessica-e1495023132444.jpg?fit=2226%2C2855&ssl=1"},{id:4,name:"John",surname:"Smith",jobs:"Developer",messages:[{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"20:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"}],country:"England",image:"https://pyxis.nymag.com/v1/imgs/c93/9ad/29257e9821f7e846082bd5cac94ef032e9-19-pop-smoke.rsquare.w1200.jpg"},{id:5,name:"Gorgina",surname:"Rodriguez",jobs:"Photograph",country:"Spain",messages:[{message:"   Lorem ipsum dolo Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumr sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit ame Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumt consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit  Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumamet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"20:16 13.01.2021"},{message:"   Lorem ipsum dolor  Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumsit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"}],image:"https://i1.wp.com/www.gerlinde.com/wp-content/uploads/2017/05/SHC-Anding-Sari-e1495022892311.jpg?fit=2284%2C2923&ssl=1"},{id:6,name:"Hanz",surname:"Muller",jobs:"Press",messages:[{message:"   Lorem ipsum dolor sit ame Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumt consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsum consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit  Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumamet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"20:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsum consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet co Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumnsectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consec Dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum Lorem ipsumtetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"},{message:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae dolorum laborum consectetur omnis, debitis quo porro ut rerum impedit reprehenderit, sit fuga veniam similique, magni eos saepe repellat laudantium?",create_at:"21:16 13.01.2021"}],country:"Germany",image:"https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/19/2019/12/PAUL.jpg"}],q=function(e){return Object(r.jsxs)("div",{className:"content-messages__message__content__group",children:[Object(r.jsx)("img",{src:e.userImage}),Object(r.jsxs)("div",{className:"content-messages__message__content__group__answer",children:[Object(r.jsx)("p",{children:e.userData.message}),Object(r.jsx)("span",{children:e.userData.create_at})]})]})},v=function(e){return Object(r.jsxs)("div",{className:"content-messages__message",children:[Object(r.jsx)("div",{className:"content-messages__message__content",children:e.data[0].messages.map((function(i,t){return Object(r.jsx)(q,{userImage:e.data[0].image,userData:i},t)}))}),Object(r.jsx)(p,{headerName:"Write message",placeholder:"Write your message",btnName:"Send"})]})},f=function(e){return Object(r.jsxs)(u.b,{to:"".concat(e.parentPathName,"/").concat(e.userKey),activeClassName:"active-user",children:[e.userdata.name," ",e.userdata.surname]})},_=function(e){return Object(r.jsx)("div",{className:"content-messages__users",children:e.data.map((function(i,t){return Object(r.jsx)(f,{parentPathName:e.parentPathName,userdata:i,userKey:t+1},t)}))})},L=Object(o.e)((function(e){var i=e.location.pathname.split("/")[2],t=j.filter((function(e){return e.id==i}));return Object(r.jsxs)("div",{className:"content-messages container-C",children:[Object(r.jsx)(_,{parentPathName:e.match.path,data:j}),Object(r.jsx)(v,{data:t})]})})),F=function(){return Object(r.jsxs)("section",{className:"container",children:[Object(r.jsx)(c,{data:m.user}),Object(r.jsx)(d,{}),Object(r.jsx)(o.a,{path:"/",exact:!0,render:function(){return Object(r.jsx)(h,{data:m})}}),Object(r.jsx)(o.a,{path:"/messages",render:function(){return Object(r.jsx)(L,{data:m.user})}})]})};a.a.render(Object(r.jsx)(u.a,{children:Object(r.jsx)(F,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d90e1295.chunk.js.map