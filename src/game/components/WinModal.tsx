import React, { FunctionComponent } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../theme/components";

export const WinModal: FunctionComponent<{ onClose: () => void }> = ({
  onClose,
}) => (
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
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text color="letter" fontWeight="700" textAlign="center" fontSize={20}>
          Gagné!
        </Text>
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
        <Text color="letter" fontWeight="500" textAlign="center" fontSize={15}>
          Retry
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
