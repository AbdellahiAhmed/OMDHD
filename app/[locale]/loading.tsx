export default function Loading() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-cloud">
      <div className="flex flex-col items-center gap-4">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-blue">
          <span className="size-5 animate-spin rounded-full border-2 border-cloud border-t-transparent" />
        </span>
      </div>
    </div>
  );
}
