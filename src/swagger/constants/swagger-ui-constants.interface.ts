export interface SwaggerUIConstants {
  TOPBAR: {
    BACKGROUND_COLOR: string;
  };
  AUTHORIZE: {
    BACKGROUND_COLOR: string;
  };
  HTTP_METHODS: {
    GET: HttpMethodStyle;
    POST: HttpMethodStyle;
    DELETE: HttpMethodStyle;
    PATCH: HttpMethodStyle;
    PUT: HttpMethodStyle;
  };
}

interface HttpMethodStyle {
  BACKGROUND_COLOR: string;
  BORDER_COLOR: string;
  SUMMARY_COLOR: string;
}
