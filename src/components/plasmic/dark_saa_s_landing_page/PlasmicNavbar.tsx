// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iUXm84svJVBsZ4AeMYaQEb
// Component: E9c6sDTNANyOh
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Logo from "../../Logo"; // plasmic-import: qdTpd3bl3VTpu/component
import Button from "../../Button"; // plasmic-import: Ogk4iYJnyyZDl/component

import { useScreenVariants as useScreenVariants_0L5INpOlLFvNx1 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 0L5INpOlLFvNX1/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_dark_saa_s_landing_page.module.css"; // plasmic-import: iUXm84svJVBsZ4AeMYaQEb/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: E9c6sDTNANyOh/css

export type PlasmicNavbar__VariantMembers = {};

export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultNavbarProps {
  className?: string;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_0L5INpOlLFvNx1()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__dNxmK)}
      >
        {true ? (
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            className={classNames("__wab_instance", sty.logo)}
            smallLogo={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? undefined
                : undefined
            }
          />
        ) : null}

        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__r8L3A)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__nFjW2)}
              color={"navLink" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__iLlTo)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__qLs5U)}
                  role={"img"}
                />
              }
            >
              {"Product"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__tcjV)}
              color={"navLink" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__oVaRp)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__zlKct)}
                  role={"img"}
                />
              }
            >
              {"Purchase"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___4QTfU)}
              color={"navLink" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__bd2Yz)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__d2K2)}
                  role={"img"}
                />
              }
            >
              {"How it Work"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__r54B)}
              color={"navLink" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__lJneC)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__b7IiW)}
                  role={"img"}
                />
              }
            >
              {"About us"}
            </Button>
          </p.Stack>
        ) : null}

        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__dZQt2)}>
            <Button
              className={classNames("__wab_instance", sty.button__lhUYq)}
              color={"navLink" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__qq9G)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__o3KtH)}
                  role={"img"}
                />
              }
            >
              {"Log in"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__g5RU)}
              color={"navLinkBlue" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__iz5CD)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__cbUtn)}
                  role={"img"}
                />
              }
            >
              {"Sign Up"}
            </Button>
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
