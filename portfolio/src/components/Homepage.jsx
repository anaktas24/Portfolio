import { Canvas } from '@react-three/fiber'


function Homepage(){
  return(

      <Canvas>
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>

  )
}
export default Homepage
