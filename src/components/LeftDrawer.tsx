import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaLock, FaUser } from 'react-icons/fa6';

interface ILeftDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeftDrawer({ isOpen, onClose }: ILeftDrawerProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader w={'100%'} borderBottomWidth="1px">
          <Image
            w={'70%'}
            objectFit={'cover'}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSExgVEhIYEhgSGxgbFBsaGB8YGxQaGRobGxoaGx0dIi0lGyEqHxoZKDclKi8xQjQ0HSM9PzoyPi0zNDEBCwsLEA8QHRISGjMhIyoxMzMzMzMzMzMzMzMzMzMxMzEzMzMzNTE+MzMzMzMzMTExNT4xMzMzMzMxMzMzMzExM//AABEIAGcB6AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABwgFBgECBAP/xABMEAACAQMABAYLDgUCBgMAAAABAgMABBEFBhIhBzFBUWFxEyIyUoGRkpOhstIUFRYXNDVTVGJyc7Gz0SMzQlXBguFDY3SDlKLC8PH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIEBQMG/8QAKBEBAQACAQMDAwQDAAAAAAAAAAECEQMEITEFEkFRYXGRobHwFTLh/9oADAMBAAIRAxEAPwCZqUpQKUpQcVoushJumweIKPQD/mt6rR9MjauX6wPEBXF1v+k/LGc3GGGlLiByFmbA3gE7Qwehs1seidblchJ1CE7gw7k9Y/p6/wAq1vS8ONlufI8W8f5rG1w8fPnh4rkueWGWpUxK2Rkb+au1aNqdpgqwgdsqf5ZP9J73qO/H+9bzXrcXJOTHcdeGcym45pSlfVspSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlB1Fc1oWuOmZ4bgJFKUXsYJAA3ks2/eOYCsGNZrv6w3kp7NcfJ1uGGVxsvZ6fD6Vy8uEzlndLNKika13n058hPZr6x613fLLn/Qvs1n/Icf0rd9G558z9f+JRr5vGG41B6xmo+i1puuV1P+kV649ZrjlKH/AE/718svVOCeZf0fLL0vmn0/VtlxouGQYeJWHHxY3+CvBJqpatxIV6mb/JNYS61mnVGYbGVxxg846ax0eu1ySBsxnJA7luX/AFUw6zpuSdp+zH+K5c5vUrYfgdECCksilSCp7U4I3jkFbOBReKua78OPHH/WaefMJj4jmlKw2s+m0sLaS4kG1sABVHG7scKvhJ4+QZr6NPRpbS8Fom3czLCvIWO9jzKONj0AGtPn4WbBThRNIOcR7I/9iD6KhjTOl5ryVprhy7tnHexr3iD+lR/+5Ne7RWqF9dIJILR3QjKsSiBx9nbYbXWKm2vb9U16H4RNH3TBFn7EzYAWVSmSeQMe1J6M1t1VRv7CS3cxzxtE68auMHB4j0jpFSRwVa5yLKtlcuXR8i3djlkcbxGSeNSM4zxHA4iMNlxTNWK1h03FYQNPPtbClR2oySWOBgVla0bhh+a3/Eh9cVWXzt+FWxd1QLMDIyqCUGAWIAz23Fk1vtVT0X/Ph/Fi9dannhXlZNFylGZDtQjKkqcGVAd4qbasbnUY8IWv11o+7EFvHCy9iVyZFdmyzMMDZdRjtRUO+7ZPppPOP+9dHkZzl2ZzxZZixxzZNNrMU0cHmvdzpG6eG4jhVVjZwY1dTkMi79p2BGGNSXVTI5WQ5R2Q8WVYqcc2RXf3dJ9NJ5x/3psuK2Nea/ulhieV87MSs74GTsoCxwOU4Fa3wZSM+irZmYuSJN5JYnErgbz0ACstrX8guvwJv02qsNS+N2w7yfyF9qt7srpZo0kTOzIqsuRg4YAjI5OOqoHiq0erHyK2/Bi9RakrVmngvtdbCCRopbpUkjOHXZY7JxnG5SOWvj8YWjPri+Q/s1DmvGirg6SumW2mZWkJUrE7BgQMEEDBrBe9Fz9Un8y/s02aiwHxhaM+uL5D+zT4wtGfXF8h/Zqv/vRc/VJ/Mv7NPei5+qT+Zf2abX2xYD4wtGfXF8h/Zp8YWjPri+Q/s1X/AN6Ln6pP5l/ZrrJo2dFLPbzIqjLM0TqFHOSVwBTZ7YsPaa86OldUS8jLMQFB2lyTxDLADJrZKqPIdx6jVrtGsTDGSckohJ5yVFJWbNNW03wkWVpM8LmSR4zh9hchW73JIyRy44q8HxuWHeT+QPaqGdOnN3ck7/4836jV79DaGtp49ubSUVo20RsOjM2BjDZBAwf8VNte2JX+Nyx7yfyB7VPjcse8n8ge1UbfBmy/vlv5p/ap8GbL++W/mn9qqaiSfjcse8n8ge1T43LHvJ/IHtVG3wZsv75b+af2qfBmy/vlv5p/aoaiShwt2HKk4/7Y9qtj1X1og0ijvbhwImCsHXZOSMjG88lQl8GbL++W/mn9qpO4K9GQ28M3YLxLwPICzIpUKQgAUgknPLSJZGy6yawQ6PhE0+1sllQbK7RLMCRu6ga1f427DvZ/Nj2qyHCVoGa/s1itlVnWVHwzbOVCuDgnl7YVFnxYaT+hj86tKSRIfxt2Hez+bHtU+Nuw72fzY9qo8+LDSf0MfnVp8WGk/oY/OrTuuokP427DvZ/Nj2qfG3Yd7P5se1UefFhpP6GPzq0+LDSf0MfnVp3NRIfxt2Hez+bHtVkdA8IVlezCGNnR2zsB12Q5AzhSCRnGdx5qhjT2pt5YxiW5jREZggKuGO0QSNw6jXn1QONIWuPp4/WFTZqLPVjdN6agsouy3MojXiGd7MePCqN7HoFZImq0a76fe/u3kLHYjZkgXO5UU4BHS2No9YHIKtZk2kS84ZIgxENpJIBxM7rHnwANXax4YoWIE9pJEDxsjCTHWMKfFmoz1d1ZutIMy20YITG27NsqhPEC3OeYA111h1budHuq3Uezt52HU7SPjjAbnGRuIFTbWoshojS0N3EJbeRZUblHGDygg71PQa99Vy4O9YGsb1O2IiuGVJl5DtHCP0FWI382asbVjNmmM0/pqKxgaefa2EKg7I2iSzBRgdZrUhwtWHKs4/7Y3f8AtXq4XfmqX78P6i1X5uKlqybW2VsgEctK6QdyvUPyrmqyjLXhs3jfZVB6Cf8ANYCsvrc+1ey9BUeJFrEV+e57vky/NftekmuDCfaFd466V3jr45eHRfD2RV7Y68UVe2OvP5XJyO1+f4T9Q/MVhrFcyxjvnQeNgKyuk2xEekgenP8AivBoRNq5hH/MQ+Ig/wCK6ehn8rhfbxZX8/wmQVzXArmv1z8Y4qL+HKVhbW6DuWlYt0lY2x6xqUK1LhK0A19Yssa7UsLCSMd8VBDKOkqzY6cUqzyg3VOzjnvraKXBR5EDg8TAb9k9DEBfDVnVUAAAYA4uiqnJIyMGUlGQgqRuZGU5B6CCPRUo6K4YGWILdWpkdRjbjcKH6SpHanqPiqRrKM7wz2EbWKzMB2SGRBG3Lhzhl6sb8fZqFrCVo5Y3TukkRl6w4IrPa5a5TaTZdpRFFGSUjU7W87tpmwMnHRu389fXg41fe9vYzs/wrZlklbk7U5ROtmA3cwNCdosXWjcMPzW/4kPrit5rRuGH5rf8SH1xVZnlBmi/58P4sXrrVpbm3SRCkiLIrd0rKGU8u8Hcaq1ov+fD+LF661ZXWfTIsbWS4KGTsYGFBxtFmCjfyDJqRcnEmr9koJaztgACSTEgAA4yTjdVddZryOe8meBFSJnIiVFCrsr2qkAcW0BteGs3rTwhXd+hj7W3ibukQklxzO5wSOgAA8uaxeqWrsmkbhYowQilTM/JGmd5+8QCFHKegGiyacaoXsUF7C9yiSQlikodQygOCu1g7u1JU55gasKur1kRkWVuQeUQpv8ARVeNatX5NH3LQyAkbzE+N0iZ3MOkcRHIejFZrVfhEu7FBEQLmJdyI5IZBzI4BIHQQccmKFm/CYdb5TaaNuGtsQGGM9j2AFCbx3IxgcdQRPrffujJJeyujgq6krhlYYIO7lBqe9FXcWlrBXkiIjukZXjLcgYow2lweNTgjHJxVrmn+DvRsNpPJHbMrRxSMh7NKcMqEqcF8HeBuNKkqCjxVaPVj5FbfgxeotVcPFVo9WPkVt+DF6i0i5MrSlYDSmt9jayGK4uljdQCykMSARkZwDyVWGfpWJ0Lp+2vQxtZlmEZAfGRsk5xkEDjwfFXo0rpOG1iMtxIIkUgFjnGWOAN2/joPdWu6/8AzZd/gyerXzttedHSOscd4jM7BUGGG0zHAGSuN5NfTX/5su/wZPVoK0Sdyeo/lVrdF/yIvw09UVVKTuT1H8qtbor+RF+GnqipG8lYdN/K7j8eb9R6yWhdXo7mPsj6RtrU7RXYlfD4GO2xzHPorZdZODq6e6lkt3gkjlkd1zKFZdsliGBHISeIndisX8W9/wB7B59aG3HwMh/vVh5f+9PgZD/erDy/96fFvf8AewefWtc0ro2S0laGUKHTG1ssHG8AjBHHuNBsfwMh/vVh5f8AvT4GQ/3qw8v/AHrFaB1YuL5Xa3CERkBttwm8jIxnj4qyvxb3/ewefWoHwMh/vVh5f+9SXwWaGS1hm2LuG77JICWiO0qlVA2Sc8e/NRr8W9/3sHn1qS+CzQEtjBMlwU2pJA4COHwoRVySOkGkL4b5SlK0w4rV9YteLTR8ohuGfbKh8IhYBSSBk/6TW0VA/DN85L+BH68lSrJtK2rWuFrpFnS2ZyYgrMHQpuYkAjPHvFbFULcBvym5/Cj9dqmmrCzVR3w1/IE/GX1XqJNUfl9r+PF64qwOturaaSgEMkjRhXVwyYJyARjBGMYJrV9EcFMFvPHMLqVzC6uFKoAxU5AJAzjNTSy9m96UciCUjjEbkdYU1VKPuR1CrV6Y+TzfhyeoaqpH3I6hSmKwvBTaLHouEqMGUu7nnYuV3/6VUeAVzwr2iyaLlLDfEUdDzEOAfGrMPDXo4Mvmq2+6/wCo9c8JfzVc/dX11p8J8q5qcEHmIq2MJyqnnA/KqnCrYwdwvUPypFyabwu/NUn34f1FqvzcVWB4XfmqT78P6i1X81KuPhbKHuV6h+VKhCLhbvBgdigIGB3LjI8qlXbPtrKawPtXUx+2R4t3+Kx9ejSbbU8p53f1jXnr87nd5W/d+44Zrjxn2n8Fd46+Ve6w0fLN/LiZukDd5R3Viy3tJtc88ccd5XTvFXtjrLWOqMzYMhWMc2dpvRu9NZ+01ZhTu8yHpOB4hWZ6bzcnxr8vK5/UODHxd/j+6aHpXLBEUFiSTgDJ3buIdde/VjQU/uiOR4mRFO0S3aniOO1O/jxyVv8A2OKBdrCRKOM7lHhNYHSWu9tHujzO32dy+Fj/AIBr1+j9KuGvmz6eHm8/rUmFwkk3L5vfu2mvLdX8UWOySKmdwBIBY8wHGfBUaaS1yupdysIF5l4/Cx3+LFeLV2Bri8iDEudsOxYljhO33k7+QDw17k6SyXLK6fnsutlymOE3tMlK4rWeEDTMtlYPPAVEitGqlhtAbTqpOOXcTXI7mL1w4OYL5jLE3uaZt7MF2kkPO6bt/wBoEdOa0C44KNIK2FMEg5CJCvjBXd6aaO4TNIvNEjyRlXkRWHYgMhnAO/k3Gp5qeWu8QvofggmZgbu4SNR3SxZZmHMGYAL14NSxobRMNnEsNugjReQbyTysx42J5zWQpVS3bmtI4XIWfRjhEZztxHCqWOA4ycCt3pRFWtE2EpuIf4Ev82L/AIb9+vRVhNeNEyXljLBDs7cmxs7R2R2rqxycHG4Gtgry6SnMcMjrjMaOwzxZVSRnxVNLbtFGheB9ywa8uVVeVIgST0bbAAeSalHQ+iYbOIRW8YjReQcZPKWJ3sTzmoOXhU0mQDtxb/8AlD96m3Vu9e4s7eaTG3NFG74GBtOgY4HIMmkW7+XOm9CQXsZiuYxIvGvIyHvlYb1PSKi3S/A/KpJtLlZF5FlBVh0baghvJFTLSqkumA1H0VJZ2EME2ztxh9vZOR20jsMHl3MK9OtCk2VyACxMEwAAySTG2AAOM1l6URU82MuP5Evm3/arN6tqRZ24IKkQxAgjBBCDcQeKspSpItuyq8cK3zrP1RfppVh6rzwrfOs/VF+mlKuPltvAVxXfXB+UlbBww/Nb/iQ+uK1/gK4rvrg/KStg4Yfmt/xIfXFPg+UJav8Ayy2/6i3/AFUqwuv/AM2Xf4Mn5VXrV/5Zbf8AUW/6qVZzSNklxE8Mq7SSqVcZIyrDB3jeKQy8qoydyeo/lVkdPxM+h5UjDO7WpChQSzEx8QA3knmrHfFZoz6KQ/8Aek9qt0ijCqFUYCgADmAGBSQt2qt7zT/VJvMP7NdJdFSoCz20iKONmiZVHWSuBVsKh3hr0yxkis1YhQvZZAP6ixKoDzgbLHHORzChLtFPY170eIUBA3bh0Vsmo+rfvjdiJiVjUF5iOPZBACr0sSB0DJ5KsFovQ1vaoI7eBYlAxuXeelmO9j0kmppbdKslQ3MfTXMdvtkKibbNuAVdok8wAGTVg9dNRYL6NnjRYrhQTG6jZ2yP6HA3MDxZ4x+cARyMjBlLI6EEEbmRlO49BBFVZdvt7zT/AFSbzD+zW78EmjJo9JK7W8saiKQMzRsi79nAJIA4+SpX1J0yb6xhnbumBWT76Eox8JXPhrP0ZtQjwxmX3emwZNnsCY2drZztyZxjdni9FaDtT883jerV+CvJpK6WCGSV+5iRnbqUE/4pomSrjzyA4MkgPMWYH0mvk8hY5Zix5yST6a9Gk9IyXUrzSttPKxZuYZ4lHMAMAdAqWeDrg+h7Cl1eIJXlAaONt6Rqe5LLxMxG/fuGRuzvo1bpDscxU9o5U8uyxH5V9PdMn0j+W371Zq71cs5UMclrCykYx2NVI6ioBXrFQbwhape9s69iJaCfJjzvKFcbSMeXGQQeUdWTNJLtraSSkZDSkc4LkeiuS03PN43reOCHT7Q3XuVzmO6zsg8SSKpYEc20oIPUtTlsjmFNFumuaKLe9Ee3tbfuNdvaztbXYRnOd+c89Vsj7kdQq1emPk834cnqGqqR9yOoVaYrHcGXzVbfdf8AUeueEv5qufur661xwZfNVt91/wBR654S/mq5+6vrrT4Z+VcxVsYO4XqH5VU4VbGDuF6h+VIuTTeF35qk+/D+otV/JqwHC781Sffh/UWq/NxVKuPhMcXA7CcMbyXBwSNhB04zSpQg7leoflSrpndRfb6tXUzFuxbAYk5c7PGc8Xdeis5Z6hgb5piehF2fSc58QrdxSuXDouPHz3ejy+q8+faX2z7MRZau20OCkKkj+pu2PjPF4KyuAB0D0V2rAa5yYtW+0yj05/xXXx8eO5jJp5vNzZWXLK2/mvTd6wQR7tvbPMnbeniHjrAaS1tfZYooQAbs9sxPJ0DfWro9ePSVxnCDiG89delx9NjL9Xk8nV5WfR5ru8eZtqV2kPOxJx1c3gr40pXZJrw4bd96VvvBzo0gPcMO67ROob2I8OB4DWqaA0O93KEXKqN7t3q/ueQVMFpbrEixoNlUAAHMBXH1nNJj7J5ru6Lhty998R960nhe+apfvw/qrW7VqXCZYSXGjJkiQu4MbBQMlgkis2BynZBOOivNevEAaLYCeEk4AliJJ3AAOpJPMKs37+Wv1qDzqfvVXTG3KjDrU117Ee8Pkms7as2tJ7+2v1qDzqfvT39tfrUHnU/eqt9hPeHyTTsJ7w+Sauz2rSe/tr9ag86n709/bX61B51P3qrfYT3h8k07Ce8Pkmmz2rSppm2YhVuYWJOABKhJJ4gBnea76a+TTfhSeoarJoaAm5gwhP8AGi/pPfrVn9IwmSGRF43R1HWykD86M2aVQj7kdQqxup+mLZNH2ivcwoy28IYGRQQRGuQQTuNV4mtJImMckbRum5lZSCCNxr57H2fRUjVm1pff21+tQedT96e/tr9ag86n71VrY+z6KbH2fRV2e1aX39tfrUHnU/env7a/WoPOp+9Va2Ps+imx9n0U2e1aX39tfrcHnU9qvb2Vdnb2hs4ztZGzjGc54sY5aqYU+z6KsdZRt7yquydr3EBs4357DjGOPPRTaWae/wCFlh/cLX/yI/aqDOEm7jm0lNJDIsqsI9l0YOpxGoOGUkHByK11bCXH8iXzb/tXPuGX6CXzb/tU2smkj8Delbe2F17ouIoNsw7HZJFTawJM7O0RnGRxc4rOcKWnrWfRzRwXcEzl4iFjlR2IDgk7KknAqHPcMv0Evm3/AGp7hl+gl82/7U2a77fbQbhLq3ZmCqk0LMScBVEiEkk8QABOasd8LLD+4Wv/AJEftVWv3DL9BL5t/wBqe4ZfoJfNv+1NrZtZT4WWH9wtf/Ij9qsjZXkc6B4ZUlQ5AZGDqSNxwVJG6qte4ZfoJfNv+1TnwPQNHo7DoyEyyEBlKkjtRnB6Qau2bNN7qCeGe2ZNILIe5lhXZPSjMGHpXx1O1apwgaqjSNtsphZostCx3DJHbITyK2B1EA8lKkRrwN6TSG9eNyFNygCE7sshJC9ZBbxVOtVRu7WS3kMcqNFJGRlT2rIRvBBHjBHgrcNF8KN/CgR2juMbg0ina8LKRtdZGek0las2nPSN8lvE8srBEjUsxPIB/k8QFVYnl7I7uRs9kZnI5tpi2PBms1rJrdd6QwLiQbCnKxoNhARxEjjY9ZPRivRqVqhLpKUYBSBSOzScQwONE53PF0cZ5ARJpLvBNbGPRcW0MbbSOB9lnbZPhAB8NbpXwtoFjRURQqooVQOJQowB4q+9VgrCa4WzS6PukTezwyAdJ2TWbrgigqOd46xVn9U9Ipc2UEkZBBjQEd6ygKynmIIIqFOELU17CZpY1LW0rEow/wCESc9jfmGT2p5RgcdYrVnWu60cxNuwKucvG42kY8WccatjlBHTms+G73WZqJOHG/Qi2gBBdWaRh3q42VzzZJPk1irrheu3UrHbwxMR3eWfHSFOB481oF3dyzytJK7SySHtmO9nJ3AYHgAA6AKtqSM9wd27SaUtgv8AS5c9CojE/wD3pqyNRzwW6nPZo1zcriaUbKIeOJDvO1zMxxkcgA6akakS14tMfJ5vw5PUNVUj7kdQq1uk4y0MiqMsyOFHOSpAFVrTVa+AANlPu4/4bftSrinXgy+arb7r/qPXPCX81XP3V9da+nB/avDo23jlRo3VW2lYYK5dmGRybiK54QLV5tG3EcSM7sg2VUZLYZScDl3A0+E+VbhVsYO4XqH5VWZdVr4kAWU+8j/hsPzFWahGFAPGAM+KkXJpnC781Sffh/UWq/NxVYXhTtnl0ZKsUbSNtRHCqWbAkUkgDecCoIGh7ljsi1nJbcP4L8Z4v6alXHwtLB3K9Q/KuaRDCqOYD8qVph9K4rmlBxWra/Pi3Qc8i+gNW01pfCPLiOEc7k+Jcf8Ayr68E3yR8OouuOtKefZGeXkrHk12d8muEQsQFBYncABkk8wHLXsyaeJbtxWU0HoOS7fZQbKr3TkdqvR0t0flWd0BqQ8mHusxpyID2zfePIPT1VINrbJEoSNQijiAGAK4+bq5O2Heuzg6PLLvl2n7vPonRcdrGI4lwBvJPGx5STymvfSlebbbd16skxmo5pSlFKUpQKUpQKUpQKUpQcEVxsjmrtSg67I5qbI5q7UoOuyOamyOau1KDrsjmrtSlApSlApSlApSlApSlApSlBh9O6u218oW5hWTHctxMv3WG8eOtMuOB+0Y5S4njHNlW9JXNSVSi7aDo3gpsIiGk7JckckjAL4VQDPhzW8W1ukSKkaLGiDCqoCqoHIANwFfalEc0pSgUpSg+M0KupV1DqwwykAhgeMEHcRWh6X4KLKZi0LPak8iEMngVhu6gRUg0oIpj4GUz2985HMsSqfGWI9Fbdq7qLZ2BDxRmSQcUkh23H3d2F8AFbRSi7rmlKUQpSlApSlApSlApSlApSlApSlB1NaTwgWkk8lvHEu0cSnjA5UHKRSlfbgus9/3w+HUyXjsv2/l4dG6gu2DcSBByqnbN5R3DxGtx0XoSC1H8KMA8rHtmPWx3+ClKnLz55eacPBhhNyMpXNKV8n3KUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQf//Z"
          />
        </DrawerHeader>

        <DrawerBody>
          <VStack py={5}>
            <InputGroup size={'md'}>
              <InputLeftElement
                children={
                  <Box color="gray.500">
                    <FaUser />
                  </Box>
                }
              />
              <Input variant={'outline'} placeholder="아이디" />
            </InputGroup>
            <InputGroup size={'md'}>
              <InputLeftElement
                children={
                  <Box color="gray.500">
                    <FaLock />
                  </Box>
                }
              />
              <Input type="password" variant={'outline'} placeholder="비밀번호" />
            </InputGroup>
            <Button w={'100%'}>로그인</Button>
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          <Box>
            <Text fontSize={'sm'} textAlign={'right'}>
              2023 인천교통공사
            </Text>
            <Text fontSize={'sm'} textAlign={'right'}>
              기술사업소 전기관리팀 시스템진단반
            </Text>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
