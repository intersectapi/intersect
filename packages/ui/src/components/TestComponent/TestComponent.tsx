export interface TestComponentProps {
  name?: string;
}

export function TestComponent({ name = 'World' }: TestComponentProps) {
  return <h1>Hello, {name}!</h1>;
}
