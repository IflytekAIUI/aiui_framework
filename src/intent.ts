export default function intent(name: string) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if (!target.intents) {
      target.intents = {}
    };
    target.intents[name] = propertyKey;
    return descriptor;
  }
}