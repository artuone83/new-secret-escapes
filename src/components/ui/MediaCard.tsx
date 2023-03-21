import { FC, ReactNode } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Sale } from "generated";
import { ROUTER_PATHS } from "router";

interface MainMediaCardProps extends Partial<Sale> {
  fullWidth?: boolean;
  image: string;
  imgHeight?: number;
  ownInnerHtml?: string;
  title: string;
  actions?: ((id: string) => ReactNode) | null;
  description?: string;
}

const DefaultActions: FC<{ id: string }> = ({ id }) => {
  return (
    <>
      <Button size="small" disabled>
        Share
      </Button>
      <Button size="small">
        <Link to={ROUTER_PATHS.detailsById(id)}>Learn More</Link>
      </Button>
    </>
  );
};

export const MediaCard: FC<MainMediaCardProps> = ({
  description,
  fullWidth = true,
  id,
  image,
  imgHeight = 280,
  ownInnerHtml,
  title,
  actions = (saleId) => <DefaultActions id={saleId} />,
}) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        width: "100%",
        ...(!fullWidth && { flex: 1, minWidth: 345 }),
      }}
    >
      <CardMedia sx={{ height: imgHeight }} image={image} title={title} />
      <CardContent>
        {!ownInnerHtml ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </>
        ) : (
          <Box dangerouslySetInnerHTML={{ __html: ownInnerHtml }} />
        )}
      </CardContent>
      {actions && <CardActions>{actions(id || "")}</CardActions>}
    </Card>
  );
};
