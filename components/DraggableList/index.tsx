import { COL, Positions, SIZE } from "@/constants/Config";
import { ScrollView, View } from "react-native";
import Item from "./Item";

interface ListProps {
  children: React.ReactElement<{ id: string }>[];
}

const DraggableList = ({ children }: ListProps) => {
  const positions: Positions = Object.assign(
    {},
    ...children.map((child, index) => ({ [child.props.id]: index }))
  );

  return (
    <ScrollView
      contentContainerStyle={{
        height: Math.ceil(children.length / COL) * SIZE,
      }}
      bounces={false}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      {children.map((child) => (
        <View>
          {children.map((child) => {
            return (
              <Item
                key={child.props.id}
                id={child.props.id}
                positions={positions}
              >
                {child}
              </Item>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
};

export default DraggableList;
