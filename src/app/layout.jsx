import './globals.css'
import {config} from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import NavBar from './../components/nav-bar/navBar';
import Footer from '@/components/footer/footer';
import BackToTop from '@/components/back-to-top/btt';
import Contact from '@/components/contact/contact';

export const metadata = {
    title: 'Jose Demo',
    description: 'Site description will appear here -- Coming soon  [Developed by Muwanguzi Joseph] ',
    themeColor:"100FOF"
}

config.autoAddCss = false

export default function RootLayout({ children }) {
    return ( <html lang = "en" >
                 <body>
                    <NavBar/>
                   { children }
                   <Contact/>
                   <Footer/>
                   <BackToTop/>
                 </body> 
            </html>
    )
}