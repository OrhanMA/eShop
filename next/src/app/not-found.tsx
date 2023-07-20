import Header from '@/components/Header'

export default function NotFound() {

  return (
    <div>
        <Header/>

        <div className="error">404</div>
        <br /><br />
        <span className="info">Page not found</span>

        <style>
            {`
            @import url(https://fonts.googleapis.com/css?family=Gilda+Display);

            html {
              color: black;
              overflow: hidden;
              height: 100%;
              user-select: none;
            }
            
            .notFoundButton{
                margin: 10px 0 0 15px
            }

            .error {
              text-align: center;
              font-family: 'Gilda Display', serif;
              font-size: 95px;
              font-style: italic;
              text-align: center;
              width: 100px;
              height: 60px;
              line-height: 60px;
              margin: auto;
              position: absolute;
              top: 0;
              bottom: 0;
              left: -60px;
              right: 0;
              animation: noise 2s linear infinite;
              overflow: default;
            }
            
            .error:after {
              content: '404';
              font-family: 'Gilda Display', serif;
              font-size: 100px;
              font-style: italic;
              text-align: center;
              width: 150px;
              height: 60px;
              line-height: 60px;
              margin: auto;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              opacity: 0;
              color: blue;
              animation: noise-1 .2s linear infinite;
            }
            
            .info {
              text-align: center;
              font-family: 'Gilda Display', serif;
              font-size: 15px;
              font-style: italic;
              text-align: center;
              width: 200px;
              height: 60px;
              line-height: 60px;
              margin: auto;
              position: absolute;
              top: 140px;
              bottom: 0;
              left: 0;
              right: 0;
              animation: noise-3 1s linear infinite;
            }
            
            .error:before {
              content: '404';
              font-family: 'Gilda Display', serif;
              font-size: 100px;
              font-style: italic;
              text-align: center;
              width: 100px;
              height: 60px;
              line-height: 60px;
              margin: auto;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              opacity: 0;
              color: red;
              animation: noise-2 .2s linear infinite;
            }
            
            @keyframes noise-1 {
              0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
              10% {opacity: .1;}
              50% {opacity: .5; left: -6px;}
              80% {opacity: .3;}
              100% {opacity: .6; left: 2px;}
            }
            
            @keyframes noise-2 {
              0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
              10% {opacity: .1;}
              50% {opacity: .5; left: 6px;}
              80% {opacity: .3;}
              100% {opacity: .6; left: -2px;}
            }
            
            @keyframes noise {
              0%, 3%, 5%, 42%, 44%, 100% {opacity: 1; transform: scaleY(1);}  
              4.3% {opacity: 1; transform: scaleY(1.7);}
              43% {opacity: 1; transform: scaleX(1.5);}
            }
            
            @keyframes noise-3 {
              0%,3%,5%,42%,44%,100% {opacity: 1; transform: scaleY(1);}
              4.3% {opacity: 1; transform: scaleY(4);}
              43% {opacity: 1; transform: scaleX(10) rotate(60deg);}
            }
            `}
        </style>
    </div>
  )
}