"use client";

import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

import { Card, Title, Info, Item, Icon, Text } from "./AddressCard.styles";

type AddressCardProps = {
  title: string;
  address: string;
  phone: string;
};

export default function AddressCard({
  title,
  address,
  phone,
}: AddressCardProps) {
  return (
    <Card>
      <Title>{title}</Title>

      <Info>
        <Item>
          <Icon>
            <FaMapMarkerAlt />
          </Icon>

          <Text>{address}</Text>
        </Item>

        <Item>
          <Icon>
            <FaPhone />
          </Icon>

          <Text>{phone}</Text>
        </Item>
      </Info>
    </Card>
  );
}
