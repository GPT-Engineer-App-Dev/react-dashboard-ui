import * as React from "react";
import { Container, Box, Text, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box className="py-5 pr-5 pl-20 bg-stone-950 rounded-[30px] max-md:pl-5" width="full">
        <Box className="flex gap-5 max-md:flex-col max-md:gap-0">
          <Box className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
            <Box className="flex flex-col mt-11 text-2xl font-semibold leading-9 text-white whitespace-nowrap max-md:mt-10">
              <Image
                loading="lazy"
                srcSet="..."
                className="aspect-[0.99] w-[86px]"
              />
              <Text className="mt-7 text-3xl leading-9">Samantha</Text>
              <Text className="mt-5 text-lg leading-7">samantha@email.com</Text>
              <Text className="mt-32 max-md:mt-10">Dashboard</Text>
              <Text className="mt-12 max-md:mt-10">Expenses</Text>
              <Text className="mt-10">Wallets</Text>
              <Text className="mt-12 max-md:mt-10">Summary</Text>
              <Text className="mt-10 max-md:mt-10">Accounts</Text>
              <Text className="mt-11 max-md:mt-10">Settings</Text>
            </Box>
          </Box>
          <Box className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
            <Box className="grow pl-20 w-full bg-white rounded-[30px] max-md:mt-10 max-md:max-w-full">
              <Box className="flex gap-5 max-md:flex-col max-md:gap-0">
                <Box className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                  <Box className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <Box className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                      <Box className="flex flex-col">
                        <Text className="text-4xl font-semibold tracking-wider text-slate-800">
                          Expenses
                        </Text>
                        <Text className="mt-4 text-base tracking-wide text-stone-950">
                          01 - 25 March, 2020
                        </Text>
                      </Box>
                      <Image
                        loading="lazy"
                        srcSet="..."
                        className="shrink-0 self-start max-w-full aspect-[4] w-[123px]"
                      />
                    </Box>
                    <Image
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7828f9828a0665dcbbc753ef69b3be2ba7105914e9b9c58c0f22359bf7246524?"
                      className="self-center mt-12 aspect-[8.33] w-[510px] max-md:mt-10 max-md:max-w-full"
                    />
                    <Box className="mt-14 max-md:mt-10 max-md:max-w-full">
                      <Box className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <Box className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
                          <Box className="flex flex-col grow max-md:mt-10">
                            <Text className="text-lg tracking-wide leading-8 text-slate-800">
                              Today
                            </Text>
                            <Box className="flex gap-4 mt-10">
                              <Image
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/788be02310a788361d7f2052f994ccfe7f4519b49463667de46049fe7063cdc4?"
                                className="shrink-0 w-12 aspect-square"
                              />
                              <Box className="flex flex-col self-start mt-2">
                                <Text className="text-base font-medium tracking-wide text-slate-800">
                                  Grocery
                                </Text>
                                <Text className="mt-2.5 text-sm tracking-wide text-gray-700">
                                  5:12 pm • Belanja di pasar
                                </Text>
                              </Box>
                            </Box>
                            <Box className="flex gap-4 mt-6">
                              <Image
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f05fda9df7128a3aef111a31078fe024f6c9013fcf10bf9c6586e5355fa1c9d?"
                                className="shrink-0 w-12 aspect-square"
                              />
                              <Box className="flex flex-col self-start mt-1.5">
                                <Text className="text-base font-medium tracking-wide text-slate-800">
                                  Transportation
                                </Text>
                                <Text className="mt-2.5 text-sm tracking-wide text-gray-700">
                                  5:12 pm • Naik bus umum
                                </Text>
                              </Box>
                            </Box>
                            <Box className="flex gap-4 mt-6">
                              <Image
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef7fa8b2cd39093a7758b568ddfbf819ba700145e21ab08ae5653a3d6fbe0af7?"
                                className="shrink-0 w-12 aspect-square"
                              />
                              <Box className="flex flex-col self-start mt-1.5">
                                <Text className="text-base font-medium tracking-wide text-slate-800">
                                  Housing
                                </Text>
                                <Text className="mt-2.5 text-sm tracking-wide text-gray-700">
                                  5:12 pm • Bayar Listrik
                                </Text>
                              </Box>
                            </Box>
                            <Text className="mt-16 text-lg tracking-wide leading-8 text-slate-800 max-md:mt-10">
                              Monday, 23 March 2020
                            </Text>
                            <Box className="flex gap-4 mt-10">
                              <Image
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47d758dafd688a3683fbed10b6253d2a20ced73f1157d99ba1626c8f7209dfe0?"
                                className="shrink-0 w-12 aspect-square"
                              />
                              <Box className="flex flex-col self-start mt-1.5">
                                <Text className="text-base font-medium tracking-wide text-slate-800">
                                  Food and Drink
                                </Text>
                                <Text className="mt-4 text-sm tracking-wide text-gray-700">
                                  5:12 pm • Makan Steak
                                </Text>
                              </Box>
                            </Box>
                            <Box className="flex gap-4 mt-6">
                              <Image
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1891006e39ee01be8bc048b5b86c75de85e9964247dc2f753babde769afffb6d?"
                                className="shrink-0 w-12 aspect-square"
                              />
                              <Box className="flex flex-col self-start mt-1.5">
                                <Text className="text-base font-medium tracking-wide text-slate-800">
                                  Entertainment
                                </Text>
                                <Text className="mt-3.5 text-sm tracking-wide text-gray-700">
                                  5:12 pm • Nonton Bioskop
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
                          <Box className="flex flex-col mt-1.5 text-base font-semibold tracking-wide text-right whitespace-nowrap text-slate-800 max-md:mt-10">
                            <Image
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e83220d25f4410076799d71ab85467321f8b5374ad458401f01cda04caadd03?"
                              className="self-end aspect-[5] w-[25px]"
                            />
                            <Text className="mt-14 max-md:mt-10">-326.800</Text>
                            <Text className="self-start mt-16 ml-3.5 max-md:mt-10 max-md:ml-2.5">
                              -15.000
                            </Text>
                            <Text className="mt-16 max-md:mt-10">-185.750</Text>
                            <Image
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e83220d25f4410076799d71ab85467321f8b5374ad458401f01cda04caadd03?"
                              className="self-end mt-24 aspect-[5] w-[25px] max-md:mt-10"
                            />
                            <Text className="mt-14 max-md:mt-10">-156.000</Text>
                            <Text className="self-start mt-16 ml-3 max-md:mt-10 max-md:ml-2.5">
                              -35.200
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <Box className="flex flex-col grow px-12 py-20 mx-auto w-full rounded-none bg-slate-50 max-md:px-5 max-md:mt-10">
                  <Text className="text-xl tracking-wide leading-8 text-slate-800">
                    Where your money go?
                  </Text>
                  <Box className="flex gap-5 mt-10 text-sm tracking-wide leading-6 text-slate-800 max-md:mt-10">
                    <Text className="flex-auto font-medium">Food and Drinks</Text>
                    <Text className="text-right">872.400</Text>
                  </Box>
                  <Box className="flex flex-col justify-center mt-4 bg-gray-100 rounded-md">
                    <Box className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </Box>
                  <Box className="flex gap-5 justify-between mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <Text className="font-medium">Shopping</Text>
                    <Text className="text-right">1.378.200</Text>
                  </Box>
                  <Box className="flex flex-col justify-center mt-3 bg-gray-100 rounded-md">
                    <Box className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </Box>
                  <Box className="flex gap-5 justify-between mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <Text className="font-medium">Housing</Text>
                    <Text className="text-right">928.500</Text>
                  </Box>
                  <Box className="flex flex-col justify-center mt-3 bg-gray-100 rounded-md">
                    <Box className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </Box>
                  <Box className="flex gap-5 mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <Text className="flex-auto font-medium">Transportation</Text>
                    <Text className="text-right">420.700</Text>
                  </Box>
                  <Box className="flex flex-col justify-center mt-3 bg-gray-100 rounded-md">
                    <Box className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </Box>
                  <Box className="flex gap-5 justify-between mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <Text className="font-medium">Vehicle</Text>
                    <Text className="text-right">520.000</Text>
                  </Box>
                  <Box className="flex flex-col justify-center mt-4 bg-gray-100 rounded-md">
                    <Box className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;