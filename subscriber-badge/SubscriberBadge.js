import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { useSelector } from "react-redux";

const SubscriberBadge = () => {
  const subscriberBadge = useSelector((state) => state.user.subscriberBadge);

  if (subscriberBadge) {
    return (
      <ChakraProvider>
        <ThemeProvider>
          <div className="subscriber-badge">
            <img src="/images/subscriber-badge.png" alt="Subscriber badge" />
          </div>
        </ThemeProvider>
      </ChakraProvider>
    );
  } else {
    return null;
  }
};

export default SubscriberBadge;

