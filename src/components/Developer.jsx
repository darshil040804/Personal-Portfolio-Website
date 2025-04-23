import React, {useEffect, useMemo, useRef} from 'react'
import {useAnimations, useFBX, useGLTF} from '@react-three/drei'

const Developer = ({animationName = 'idle', ...props}) => {
    const group = useRef();

    // load
    const { nodes, materials } = useGLTF('/models/model.glb')
    const idle    = useFBX('/models/animations/idle.fbx')
    const salute  = useFBX('/models/animations/salute.fbx')
    const clap    = useFBX('/models/animations/clapping.fbx')
    const victory = useFBX('/models/animations/victory.fbx')

    // once they’re all loaded, clone & rename exactly once
    const clips = useMemo(() => {
        if (
            !idle.animations.length ||
            !salute.animations.length ||
            !clap.animations.length ||
            !victory.animations.length
        ) {
            return []
        }

        return [
            Object.assign(idle.animations[0].clone(),    { name: 'idle' }),
            Object.assign(salute.animations[0].clone(),  { name: 'salute' }),
            Object.assign(clap.animations[0].clone(),    { name: 'clapping' }),
            Object.assign(victory.animations[0].clone(), { name: 'victory' })
        ]
    }, [
        idle.animations,
        salute.animations,
        clap.animations,
        victory.animations
    ])

    // wire up the mixer & actions
    const { actions } = useAnimations(clips, group)

    // play / fade in & out, _but only once `actions[...]` is defined_
    useEffect(() => {
        const action = actions[animationName]
        if (!action) return

        action.reset().fadeIn(0.5).play()
        return () => {
            // guard again on unmount
            if (actions[animationName]) {
                actions[animationName].fadeOut(0.5)
            }
        }
    }, [actions, animationName])

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                geometry={nodes.avaturn_body.geometry}
                material={materials.avaturn_body_material}
                skeleton={nodes.avaturn_body.skeleton}
            />
            <skinnedMesh
                geometry={nodes.avaturn_hair_0.geometry}
                material={materials.avaturn_hair_0_material}
                skeleton={nodes.avaturn_hair_0.skeleton}
            />
            <skinnedMesh
                geometry={nodes.avaturn_shoes_0.geometry}
                material={materials.avaturn_shoes_0_material}
                skeleton={nodes.avaturn_shoes_0.skeleton}
            />
            <skinnedMesh
                geometry={nodes.avaturn_look_0.geometry}
                material={materials.avaturn_look_0_material}
                skeleton={nodes.avaturn_look_0.skeleton}
            />
            <skinnedMesh
                geometry={nodes.avaturn_look_1.geometry}
                material={materials.avaturn_look_1_material}
                skeleton={nodes.avaturn_look_1.skeleton}
            />
        </group>
    )
}

useGLTF.preload('/models/model.glb')

export default Developer