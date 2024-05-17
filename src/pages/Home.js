import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Object3D } from 'three';
import { useGLTF } from '@react-three/drei'

import logo from "./../logo_extended_advanced.svg";
import { Vector3 } from 'three';

import './Home.scss';

export default function Home()
{
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position / rotationScaller);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const rotationScaller = 500
    return(
        <>
            <div className="position-relative" style={{height: "110vh"}}>
                <Canvas
                camera={{ position: [0, 80, 0]}}
                >
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />

                    <Suspense fallback={null}>
                        <InstancedItem instances={100} spread={300} scrollPosition={scrollPosition} fileName="/ComputerMouse.gltf" rotation={[scrollPosition, scrollPosition, scrollPosition]}/>
                        <InstancedItem instances={100} spread={600} scrollPosition={scrollPosition} fileName="/Keyboard.gltf" scale={new Vector3(0.4, 0.4, 0.4)} rotation={[scrollPosition, scrollPosition, scrollPosition]}/>
                        <InstancedItem instances={100} spread={600} scrollPosition={scrollPosition} fileName="/VRHeadset.gltf" scale={new Vector3(0.8, 0.8, 0.8)} rotation={[scrollPosition, scrollPosition, scrollPosition]}/>
                    </Suspense>

                </Canvas>
                <h1 className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center" style={{top: "0"}}>Welcome Clarkson Developers</h1>
            </div>

            <div className="container">
                <div className = "d-flex flex-column container">
                    
                    <p><img src={logo} alt="Clarkson University Google Developer Student Club" className="w-100" width="1242" height="230"></img></p>
                    <p>Google Developer Student Clubs (GDSC) is a program for university students to learn mobile, cloud, web development, virtual reality, and applied artificial intelligence. Students form teams around a problem or idea and build a solution over a few months with help from local organizers and experts.</p>
                    <p>We are a group of students at Clarkson University who are passionate about technology and want to learn more about it. We are a part of the Google Developer Student Clubs program, supported by Google to expose students to the cutting edge.</p>
                    <p>We have interactive events, speakers, and collaborative projects that we work on as a club.</p>
                    <div>
                        <p>We are currently working on a project to create immersive WebXR experiences using ThreeJS and ReactJS.</p>
                        <p>If you are interested in joining our club, please contact us at <a href="mailto:clarksongdsc@gmail.com">clarksongdsc@gmail.com</a>.</p>
                        <p>Find out when new events are out here at the <a href="https://gdsc.community.dev/clarkson-university/">Google Dev Community</a>.</p>
                        <p>You can also follow us on <a href="https://www.instagram.com/clarkson_gdsc/">Instagram</a>.</p>
                        <p>We are also on <a href="https://github.com/Clarkson-Google-Developer-Student-Club">GitHub</a>.</p>
                        <p>We are also on <a href="https://www.linkedin.com/company/clarkson-google-developer-student-club">LinkedIn</a>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

/*
Props:
    instances: number of instances to create
    spread: how far apart to spread the instances
    fileName: the file name of the gltf to load

All other props are passed to the instanced mesh.
Look over the three.js and react-fiber-three documentation for more info.
*/
function InstancedItem(props)
{
    const ref = useRef();
    const { nodes, materials } = useGLTF(props.fileName);
    const [position] = useState(() => {
        var result = [];
        for (var x = 0; x < props.instances; x++)
            result.push(new Vector3(Math.random() * props.spread - (props.spread / 2), Math.random() * props.spread - (props.spread / 2), Math.random() * props.spread - (props.spread / 2)));
        return result;
    });
    const [rotation] = useState(() => {
        var result = [];
        for (var x = 0; x < props.instances; x++)
            result.push(new Vector3(Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI));
        return result;
    });
    useFrame(({ clock }) => {
        let counter = 0;
        const t = clock.oldTime * 0.0001;
        for (let x = 0; x < props.instances; x++) {
            const id = counter++;
            const tempBoxes = new Object3D();

            tempBoxes.position.set(position[id].x, position[id].y, position[id].z);
            tempBoxes.rotation.set(rotation[id].x, rotation[id].y + t, rotation[id].z);

            const scale = props.scale || new Vector3(1, 1, 1);
            tempBoxes.scale.set(scale.x, scale.y, scale.z);

            tempBoxes.updateMatrix();
            ref.current.setMatrixAt(id, tempBoxes.matrix);
        }
        ref.current.instanceMatrix.needsUpdate = true;
    });

    return(
        <instancedMesh ref={ref} args={[nodes.Nodes.geometry, materials.Mat, props.instances]} {...props}/>
    )
}

useGLTF.preload('/ComputerMouse.gltf')
useGLTF.preload('/Keyboard.gltf')
useGLTF.preload('/VRHeadset.gltf')