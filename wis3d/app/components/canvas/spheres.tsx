import {memo, MutableRefObject, useLayoutEffect, useRef} from 'react';
import {useXHR} from "@/utils/hooks";
import {Color, Material, Side} from "three"
import {centerOnDbClick} from "./trackball-controls";

interface IProps {
    url: string;
    // material?: string;
    defaultColor?: string;
    visible?: boolean;
    sphereColors?: boolean;
}

function gmat() {
    return (<meshNormalMaterial transparent={true} opacity={0.5}/>);
}

function getMaterial(
    material: string,
    ref: MutableRefObject<Material>,
    // vertexColors: boolean,
    color: string | number,
    // wireframe: boolean,
    // flatShading: boolean,
    // shininess: number,
    // side: Side
) {
    return (
        <meshNormalMaterial
            ref={ref}
            // vertexColors={vertexColors}
            // color={color}
            // wireframe={wireframe}
            // side={side}
            // flatShading={flatShading}
        />
    );
    // console.log("material", material);
    // switch (material) {
    //     case "MeshNormalMaterial":
    //         return (
    //             <meshNormalMaterial
    //                 ref={ref}
    //                 // vertexColors={vertexColors}
    //                 color={color}
    //                 // wireframe={wireframe}
    //                 // side={side}
    //                 // flatShading={flatShading}
    //             />
    //         );
    //     case "MeshBasicMaterial":
    //     default:
    //         return (
    //             <meshBasicMaterial ref={ref}
    //                 // vertexColors={vertexColors}
    //                                color={color}
    //                 // wireframe={wireframe}
    //                 // side={side}
    //             />
    //         );
    // }
}

export const Spheres = memo<IProps>(function Spheres(props) {
    // const {url, defaultColor, material, visible = true, sphereColors} = props;
    const {url, defaultColor, visible = true, sphereColors} = props;
    const spheres = useXHR(url, "GET", "json", []);


    return (
        <group visible={visible}>
            {spheres.map((sphere, index) => {
                const {center, radius, color, scales, quaternion} = sphere;
                const userColor = color ? color.map(x => x / 250) : undefined;
                // const materialRef = useRef<Material>();
                // useLayoutEffect(() => {
                //     if (materialRef.current) materialRef.current.needsUpdate = true;
                // }, );


                return (
                    <mesh position={center} quaternion={quaternion} scale={scales} key={index}
                          onDoubleClick={centerOnDbClick}>

                        <sphereBufferGeometry args={[radius, 30, 30]}/>

                        {gmat()}

                    </mesh>
                )
            })}
        </group>
    )
})

export default Spheres;