interface PlaceholderProps {
  id: number
}

type FoundObject = (a: Array<{}>, b: number) => void

export const foundObject: FoundObject = (array, id) =>
  array.find((item: any) => item.id === id)
