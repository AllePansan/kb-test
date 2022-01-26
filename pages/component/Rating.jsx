import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link';

export default function Rating(props) {
    function stars() {
        switch (props.stars) {
            case 0.5:
                return (<Image src={'/../public/assets/body/card/Star-Half.png'} width={14} height={14} />);
                break
            case 1:
                return (
                        <>
                            <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        </>);
                break
            case 1.5:
                return (
                    <>
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Half.png'} width={14} height={14} />
                    </>);
                break
            case 2:
                return (
                    <>
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                    </>);
                break
            case 2.5:
                return (
                    <>
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Half.png'} width={14} height={14} />
                    </>);
                break
            case 3:
                return (
                    <>
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                    </>);
                break
            case 3.5:
                return (
                    <>
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Half.png'} width={14} height={14} />
                    </>);
                break
            case 4:
                return (
                    <>
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                    </>);                
                    break
            case 4.5:
                return (
                    <>
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Half.png'} width={14} height={14} />
                    </>);
                    break
            case 5:
                return (
                    <>
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                        <Image src={'/../public/assets/body/card/Star-Full.png'} width={14} height={14} />
                    </>);
                break
        }
    }
    return (
        stars()
    )
}