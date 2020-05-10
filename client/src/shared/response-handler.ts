export function success(data: any) {
  return {
    error: false,
    data
  };
}

export function error(data: any) {
  return {
    error: true,
    data
  };
}
