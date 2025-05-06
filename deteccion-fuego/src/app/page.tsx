                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Mensaje"
                  ></textarea>
                  <Button>
                    Enviar Mensaje
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Proyecto Universitario. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Términos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
