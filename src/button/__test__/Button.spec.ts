import Button from '../index';

import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
// 测试分组
describe('Button', () => {
  // mount
  test('mount  @vue/test-utils', () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });

    // 断言
    expect(wrapper.text()).toBe('Button');
  });
});

// color
describe('colors', () => {
  test('default colors', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });
    expect(
      wrapper
        .classes()
        .map((c) => c.replace('\n', ''))
        .includes('bg-blue-500')
    ).toBe(true);
  });
  test('red colors', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
      props: {
        color: 'red',
      },
    });
    console.log(
      ' wrapper',
      wrapper.classes().map((c) => c.replace('\n', ''))
    );
    expect(
      wrapper
        .classes()
        .map((c) => c.replace('\n', ''))
        .includes('bg-red-500')
    ).toBe(true);
  });
});

// icon
describe('icon', () => {
  test('edit icon', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
      props: {
        icon: 'edit',
      },
    });
    expect(
      wrapper
        .find('i')
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('i-ic-baseline-edit')
    ).toBe(true);
  });
});

// round
describe('round', () => {
  test('round', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
      props: {
        round: true,
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('rounded-full')
    ).toBe(true);
  });
});

// plain
describe('plain', () => {
  test('default', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-blue-500')
    ).toBe(true);
  });
  test('plain true', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
      props: {
        plain: true,
      },
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-blue-100')
    ).toBe(true);
  });
});
