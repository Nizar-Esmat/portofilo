import { Stars } from '@react-three/drei';

/** A deep-field star cloud rendered as instanced points via drei's Stars helper. */
export default function StarField() {
  return (
    <Stars
      radius={90}
      depth={60}
      count={2500}
      factor={3}
      saturation={0.15}
      fade
      speed={0.4}
    />
  );
}
