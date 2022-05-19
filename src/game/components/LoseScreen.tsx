import { FunctionComponent } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../theme/components";

export const LoseScreen: FunctionComponent<{
  onClose: () => void;
  answer: string;
}> = ({ onClose, answer }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          height: "40%",
          width: "80%",
          backgroundColor: "#000C",
          borderRadius: 20,
          padding: 20,
        }}
      >
        <View
          style={{
            justifyContent: "space-evenly",
            flex: 1,
          }}
        >
          <Text
            color="letter"
            fontWeight="700"
            textAlign="center"
            fontSize={20}
          >
            Perdu!
          </Text>
          <View>
            <Text
              color="letter"
              fontWeight="400"
              textAlign="center"
              fontSize={16}
            >
              La réponse était:
            </Text>
            <Text
              color="letter"
              fontWeight="700"
              textAlign="center"
              fontSize={18}
            >
              {answer.toUpperCase()}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={onClose}
          style={{
            justifyContent: "center",
            backgroundColor: "turquoise",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Text
            color="letter"
            fontWeight="500"
            textAlign="center"
            fontSize={15}
          >
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
