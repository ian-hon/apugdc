import temp_pfp from '../assets/sns/discord.png';
import Image from "next/image";
import styles from '../hall-of-fame/hall-of-fame.module.css';

const honoredGuests = [
    {
        name: "John Doe",
        description: "renowned game developer",
        img: temp_pfp
    },
    {
        name: "Larian studios",
        description: "creators of Baldur's Gate",
        img: temp_pfp
    },
    // {
    //     name: "John Doe",
    //     description: "renowned game developer",
    //     img: temp_pfp
    // },
    // {
    //     name: "Larian studios",
    //     description: "creators of Baldur's Gate",
    //     img: temp_pfp
    // },
    // {
    //     name: "John Doe",
    //     description: "renowned game developer",
    //     img: temp_pfp
    // },
    // {
    //     name: "Larian studios",
    //     description: "creators of Baldur's Gate",
    //     img: temp_pfp
    // },
    // {
    //     name: "John Doe",
    //     description: "renowned game developer",
    //     img: temp_pfp
    // },
    // {
    //     name: "Larian studios",
    //     description: "creators of Baldur's Gate",
    //     img: temp_pfp
    // },
    // {
    //     name: "John Doe",
    //     description: "renowned game developer",
    //     img: temp_pfp
    // },
]


export function HonoredGuests({ custom_style={} } : { custom_style?: any }) : React.JSX.Element {
    return (
        <div id={styles.honoredGuests} style={custom_style}>
            {
                honoredGuests.map((e) => (
                    <div className={styles.guest} key={e.name}>
                        <Image src={e.img} alt=''/>
                        <h2>{e.name}</h2>
                        <h3>{e.description}</h3>
                    </div>
                ))
            }
        </div>
    )
}
