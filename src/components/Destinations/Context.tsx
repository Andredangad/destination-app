import React, { PropsWithChildren } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Destination } from '../../types';

export const Context = React.createContext<{
  destinations: Destination[];
  setDestinations: (destination: Destination[]) => void;
}>({
  destinations: [],
  setDestinations: () => {},
});

export function DestinationContext({ children }: PropsWithChildren): JSX.Element {
  const [destinations, setDestinations] = useLocalStorage<Destination[]>('desination', []);
  return <Context.Provider value={{ destinations, setDestinations }}>{children}</Context.Provider>;
}
