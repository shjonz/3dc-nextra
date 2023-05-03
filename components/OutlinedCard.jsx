import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from '@material-tailwind/react';

export default function OutlinedCard(props) {
  const { imageUrl, when, where, message, cardTitle, cta } = props;
  return (
    <Card
      shadow={false}
      className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center rounded-3xl"
      color="transparent"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={
          'absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center'
        }
        style={{ backgroundImage: `url('${imageUrl}');` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h4"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {message}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {when}
        </Typography>
        <Button variant="text" color="white" className="underline">
          {cta}
        </Button>
      </CardBody>
    </Card>
  );
}
